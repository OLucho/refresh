import Image from "next/image";

import {api} from "../api";
import {Header} from "../components/header";

export default async function BoysPage() {
  const models = await api.models.list();

  const boys = models.filter((model) => model.gender === "m");

  return (
    <>
      <Header subtitle="BOYS" />
      <div className="-w-72 container mx-auto">
        <section
          className="grid grid-cols-1
        gap-2 md:grid-cols-2 lg:grid-cols-3
      "
        >
          {boys.map((boy) => (
            <div
              key={boy.id}
              className="
          flex flex-col items-center
            "
            >
              <img alt={boy.name} className="grayscale" src={boy.img} />
              <p>
                {boy.name} {boy.lastName}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
