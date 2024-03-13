"use client";

import {Button} from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";

import {Header} from "../components/header";

export default function ContactPage() {
  return (
    <>
      <Header subtitle="Contacto" />

      <Card className="h-[550px] flex-1 md:lg:h-[450px]">
        <CardHeader>
          <CardTitle>Ponte en contacto</CardTitle>
          <CardDescription>Puedes enviarnos un mail</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-3">
                <Label htmlFor="name">Nombre</Label>
                <Input required id="name" maxLength={60} />
                <Label htmlFor="email">Email</Label>
                <Input required id="email" maxLength={60} />
                <Label htmlFor="message">Mensaje</Label>
                <Input required id="message" maxLength={60} />
              </div>
              <div className="flex flex-col space-y-1.5" />
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col justify-between gap-5 md:lg:flex-row">
          <Button className="mb-3 w-full md:lg:w-auto">Enviar</Button>
          <div className="flex items-center gap-2">
            <p className="text-center">Encontranos en:</p>
            <Button
              className="flex items-center gap-1 "
              onClick={() => {
                window.open("https://www.instagram.com/refreshok/", "_blank");
              }}
            >
              <img alt="Instagram Icon" className="h-6 w-6" src="/instagram.svg" />
              <span>Instagram</span>
            </Button>

            <Button
              className="flex items-center gap-1 "
              onClick={() => {
                window.open(`https://wa.me/5491173669220`, "_blank");
              }}
            >
              <img alt="whatsapp Icon" className="h-6 w-6" src="/whatsapp.svg" />
              <span>Whatsapp</span>
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
}
{
  /* <h1
className="
    text-center
    text-lg
    font-bold
"
>
¿Quieres saber más de nosotros? <br />
¡Síguenos en nuestras redes sociales!
</h1>
<div className="mt-5 flex items-center gap-4">
<Button className="flex h-12 items-center gap-1 rounded-full">
  <img alt="Instagram Icon" className="h-6 w-6" src="/instagram.svg" />
  <span>Instagram</span>
</Button>
</div>
</div> */
}
