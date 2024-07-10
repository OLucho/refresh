/* eslint-disable jsx-a11y/media-has-caption */

import type {Metadata} from "next";

import {Header} from "../components/header";

import {ButtonCheckoutWhatsapp} from "./page.client";

export const metadata: Metadata = {
  title: "Refresh - Academia",
};

export default function AcademyPage() {
  return (
    <>
      <Header subtitle="Academia" />
      <div
        className="
        flex
        min-w-[500px]
        items-center
        justify-center
      "
      >
        <iframe
          allowFullScreen
          allow=""
          height={394}
          src="https://www.youtube.com/embed/UJyS8lLBlpg"
          title="YouTube video player"
          width={500}
        />
      </div>
      <ButtonCheckoutWhatsapp />
    </>
  );
}
