/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {Header} from "@/app/components/header";
import {api} from "@/app/api";
import {Separator} from "@/components/ui/separator";

import {ClientButton} from "./page.client";

export default async function ModelPage(params) {
  const paramId = params.params.id;
  const models = await api.models.list();
  const model = models.find((model) => model.id === paramId);

  model.medidas = model.medidas.replace(/\./g, ",");
  model.height = model.height.replace(/\./g, ",");
  model.foot = model.foot.replace(/\./g, ",");
  model.pants = model.pants.replace(/\./g, ",");
  model.shirt = model.shirt.replace(/\./g, ",");

  return (
    <>
      <Header />
      <div
        className="mx-auto flex max-w-4xl flex-col  items-center justify-around 
        gap-10 py-8
        lg:flex-row
      "
      >
        <div className="mr-[15px] flex h-[22rem] w-[22rem] lg:h-[30rem] lg:w-[30rem]">
          <img
            alt={`${model.name} `}
            className="
              h-full w-full rounded-md object-cover
          "
            src={model?.img}
          />
        </div>
        <div className="flex h-full flex-col  sm:items-center lg:flex-col lg:gap-11">
          <h1 className="mb-4 text-4xl font-bold capitalize lg:mb-0">{model.name}</h1>
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
        <ClientButton polaroidLink={model?.polaroid} />
      </div>
      <Separator />
    </>
  );
}
