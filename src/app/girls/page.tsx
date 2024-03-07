import {api} from "../api";
import {Header} from "../components/header";
import {ModelList} from "../components/modelsList";

export default async function GirlsPage() {
  const models = await api.models.list();

  const girls = models.filter((model) => model.gender === "f");

  return (
    <>
      <Header subtitle="GIRLS" />
      <section
        className="flex flex-wrap justify-center gap-4
          "
      >
        <ModelList models={girls} />
      </section>
    </>
  );
}
