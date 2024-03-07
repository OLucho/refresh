import {redirect} from "next/navigation";

import {api} from "../api";
import {Header} from "../components/header";
import {ModelList} from "../components/modelsList";

export default async function BoysPage() {
  const models = await api.models.list();

  const boys = models.filter((model) => model.gender === "m");

  return (
    <>
      <Header subtitle="BOYS" />
      <section
        className="flex flex-wrap justify-center gap-4
          "
      >
        <ModelList models={boys} />
      </section>
    </>
  );
}
