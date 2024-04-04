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
        grid-cols-3 
      "
        >
          {Array.from({length: 15}).map((_, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={index}>
              <Image
                alt="Model"
                className="rounded-md transition duration-300 ease-in-out hover:scale-110 hover:shadow-lg"
                height={500}
                src={`/home/${index + 1}.webp`}
                width={500}
              />
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
