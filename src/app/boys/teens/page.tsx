import {api} from "@/app/api";
import {Header} from "@/app/components/header";
import {ModelList} from "@/app/components/modelsList";

export default async function BoysTeensPage() {
  const models = await api.models.list();

  const boys = models.filter((model) => model.gender === "m" && model.isTeen === "si");

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
