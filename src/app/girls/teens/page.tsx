import type {Metadata} from "next";

import {api} from "@/app/api";
import {Header} from "@/app/components/header";
import {ModelList} from "@/app/components/modelsList";

export const metadata: Metadata = {
  title: "Refresh - Girls",
};

export default async function GirlsNewFacePage() {
  const models = await api.models.list();

  const girls = models.filter((model) => model.gender === "f" && model.isTeen === "si");

  return (
    <>
      <Header subtitle="Girls" />
      <ModelList models={girls} />
    </>
  );
}
