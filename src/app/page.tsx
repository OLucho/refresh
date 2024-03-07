import Image from "next/image";

import Model from "../../ana.jpg";

import {Header} from "./components/header";

export default async function HomePage() {
  return (
    <>
      <Header />
      <div className="-w-72 container mx-auto  ">
        <section
          className="grid grid-cols-1
        gap-2 md:grid-cols-2 lg:grid-cols-3
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
