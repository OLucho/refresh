import {api} from "@/app/api";
import {Header} from "@/app/components/header";
import {ModelList} from "@/app/components/modelsList";

export default async function BoysNewFacePage() {
  const models = await api.models.list();

  const boys = models.filter((model) => model.gender === "m" && model.isNewFace === "si");

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
