/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Header} from "@/app/components/header";
import {api} from "@/app/api";
import {Button} from "@/components/ui/button";
import {Separator} from "@/components/ui/separator";

export default async function ModelPage(params) {
  const paramId = params.params.id;
  const models = await api.models.list();
  const model = models.find((model) => model.id === paramId);

  return (
    <>
      <Header />
      <div
        className="xs=flex-col mx-auto flex max-w-4xl items-start justify-around gap-10 
        py-8 sm:flex-col sm:items-center md:flex-col
        lg:flex-row
      "
      >
        <div className="mb-8 flex">
          <img alt={`${model.name} `} className="h-96 w-96 object-cover" src={model?.img} />
        </div>
        <div className="flex h-full flex-col sm:flex-row sm:items-center sm:gap-10 md:lg:flex-col">
          <h1 className="text-4xl  font-bold capitalize">{model.name}</h1>
          <div
            className="
            flex flex-col
            gap-2
            text-gray-300              
        "
          >
            <p className="text-gray-300">Medidas: {model?.medidas}</p>
            <p className="text-gray-300">Color de ojos: {model?.eyesColor}</p>
            <p className="text-gray-300">Color de pelo: {model?.hairColor}</p>
            <p className="text-gray-300">Color de piel: {model?.skin}</p>
            <p className="text-gray-300">Altura: {model?.height} cm</p>
            <p className="text-gray-300">Talla de pantalón: {model?.pants}</p>
            <p className="text-gray-300">Talla de camisa: {model?.shirt}</p>
            <p className="text-gray-300">Talla de zapato: {model?.foot}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-center hover:cursor-pointer">
        <Button variant="link">
          <a href={model?.polaroid} rel="noreferrer" target="_blank">
            POLAROID
          </a>
        </Button>
      </div>
      <Separator />
    </>
  );
}
