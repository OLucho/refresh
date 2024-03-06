import Image from "next/image";

import {Button} from "@/components/ui/button";

import Model from "../../ana.jpg";

export default function HomePage() {
  return (
    <div className="-w-72 container mx-auto  ">
      <section className="grid grid-cols-3 gap-2">
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
  );
}
