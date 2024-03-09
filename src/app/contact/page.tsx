/* eslint-disable jsx-a11y/media-has-caption */

import {Header} from "../components/header";

import {ButtonCheckoutWhatsapp} from "./page.client";

export default function ContactPage() {
  return (
    <>
      <Header subtitle="Contact" />
      <div
        className="
        flex
        items-center
        justify-center
      "
      >
        <video controls src="/video.mp4" />
      </div>
      <ButtonCheckoutWhatsapp />
    </>
  );
}
