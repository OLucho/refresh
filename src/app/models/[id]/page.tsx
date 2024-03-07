import {Header} from "@/app/components/header";
import {api} from "@/app/api";

export default async function ModelPage(params, searchParams) {
  const paramId = params.params.id;
  const models = await api.models.list();
  const model = models.find((model) => model.id === paramId);

  return (
    <>
      <Header />
      <div className="mx-auto max-w-4xl py-8">
        <div className="mb-8 flex items-center justify-center">
          <img
            alt={`${model.name} ${model?.lastName}`}
            className="h-72 w-72 object-cover"
            src={model?.img}
          />
        </div>
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            {model.name} {model?.lastName}
          </h1>
          <p className="text-gray-800">{model?.medidas}</p>
          <p className="text-gray-800">Color de ojos: {model?.eyesColor}</p>
          <p className="text-gray-800">Color de pelo: {model?.hairColor}</p>
          <div className="mt-4 flex items-center justify-center">
            <a
              className="flex items-center text-blue-500 hover:text-blue-700"
              href={`https://www.instagram.com/${model.instagram}`}
              rel="noopener noreferrer"
              target="_blank"
            >
              Instagram ${model?.instagram}
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
