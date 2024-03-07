import Image from "next/image";

import Model from "../../ana.jpg";

import {Header} from "./components/header";

export default async function HomePage() {
  return (
    <>
      <Header />
      <div className="-w-72 container mx-auto  ">
        <section
          className="grid 
        grid-cols-3 gap-2
      "
        >
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
          <div>
            <Image alt="Model" src={Model} />
          </div>
        </section>
      </div>
    </>
  );
}
