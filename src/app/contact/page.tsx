import Video from "next-video";

import video from "../../../videos/Charlotte de Witte - Pria.mp4";
import {Header} from "../components/header";

export default function ContactPage() {
  return (
    <>
      <Header subtitle="Contact" />
      <div>
        <Video src={video} />
      </div>
    </>
  );
}
