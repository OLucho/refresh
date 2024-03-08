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
        grid-cols-3 gap-4
      "
        >
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
          <div>
            <Image
              alt="Model"
              className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
              src={Model}
            />
          </div>
        </section>
      </div>
    </>
  );
}
