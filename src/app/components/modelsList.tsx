/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
"use client";

import {useRouter} from "next/navigation";

export function ModelList({models}) {
  const router = useRouter();

  return (
    <section
      className="flex flex-wrap justify-center gap-5 
          "
    >
      {models.map((m) => (
        <div
          key={m.id}
          className="flex flex-col items-center hover:cursor-pointer"
          onClick={() => {
            router.push(`/models/${m.id}`);
          }}
        >
          <div className="h-[20rem] w-[20rem] overflow-hidden rounded-lg lg:h-[27rem] lg:w-[27rem]">
            <img
              alt={m.name}
              className="
              h-full w-full object-cover
              "
              src={m.img}
            />
          </div>
          <p className="mt-2 text-3xl font-bold">{m.name}</p>
        </div>
      ))}
    </section>
  );
}
