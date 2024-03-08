/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Header} from "@/app/components/header";
import {api} from "@/app/api";

export default async function ModelPage(params) {
  const paramId = params.params.id;
  const models = await api.models.list();
  const model = models.find((model) => model.id === paramId);

  return (
    <>
      <Header />
      <div className="mx-auto flex max-w-4xl items-center justify-center gap-10 py-8">
        <div className="mb-8 flex items-center justify-center sm:flex-col md:flex-col">
          <img
            alt={`${model.name} ${model?.lastName}`}
            className="h-96 w-96 object-cover"
            src={model?.img}
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {model.name} {model?.lastName}
          </h1>
          <p className="text-gray-300">Medidas: {model?.medidas}</p>
          <p className="text-gray-300">Color de ojos: {model?.eyesColor}</p>
          <p className="text-gray-300">Color de pelo: {model?.hairColor}</p>
          <p className="text-gray-300">Color de piel: {model?.skin}</p>
          <p className="text-gray-300">Altura: {model?.height}</p>
          <p className="text-gray-300">Talla de pantalón: {model?.pants}</p>
          <p className="text-gray-300">Talla de camisa: {model?.shirt}</p>
          <p className="text-gray-300">Talla de zapato: {model?.foot}</p>
          <p className="text-gray-300">Cadera: {model?.hips}</p>
        </div>
      </div>
    </>
  );
}
