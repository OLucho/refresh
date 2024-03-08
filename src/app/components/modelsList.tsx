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
          <div className="h-[27rem] w-[27rem] overflow-hidden rounded-lg">
            <img
              alt={m.name}
              className="
              h-full w-full object-cover
              "
              src={m.img}
            />
          </div>
          <p className="mt-2 text-3xl font-bold">
            {m.name} {m.lastName}
          </p>
        </div>
      ))}
    </section>
  );
}
