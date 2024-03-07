import {api} from "../api";
import {Header} from "../components/header";

export default async function BoysPage() {
  const models = await api.models.list();

  const boys = models.filter((model) => model.gender === "m");

  return (
    <>
      <Header subtitle="BOYS" />
      <div className="container">
        <section
          className="flex flex-wrap justify-center gap-4
          "
        >
          {boys.map((b) => (
            <div key={b.id} className="flex flex-col items-center hover:cursor-pointer">
              <div className="h-80 w-80 overflow-hidden rounded-lg">
                <img
                  alt={b.name}
                  className="
              h-full w-full object-cover
              "
                  src={b.img}
                />
              </div>
              <p className="mt-2 text-3xl font-bold">
                {b.name} {b.lastName}
              </p>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
