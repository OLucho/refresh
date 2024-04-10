"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";

import {Header} from "../components/header";

export default function ContactPage() {
  const buttonCn = "flex max-w-[30rem] min-w-[25rem] items-center gap-1 rounded-full bg-[#c9c9e4] ";

  return (
    <>
      <Header subtitle="Contacto" />

      <div className="mt-7 flex flex-col items-center gap-8">
        <Button
          className={buttonCn}
          onClick={() => {
            window.open("https://www.instagram.com/refreshok/", "_blank");
          }}
        >
          <img alt="Instagram Icon" className="h-6 w-6" src="/instagram.svg" />
          <span className="min-w-[5rem] text-black">Instagram</span>
        </Button>

        <Button
          className={buttonCn}
          onClick={() => {
            window.open(`https://wa.me/5491173669220`, "_blank");
          }}
        >
          <img alt="whatsapp Icon" className="h-6 w-6" src="/whatsapp.svg" />
          <span className="min-w-[5rem] text-black">Whatsapp</span>
        </Button>

        <Button
          className={buttonCn}
          onClick={() => {
            window.open("mailto:refreshproducer@gmail.com", "_blank");
          }}
        >
          <img alt="Email icon" className="h-6 w-6" src="/email.svg" />
          <span className="min-w-[5rem] text-black">Email</span>
        </Button>

        <Dialog>
          <DialogTrigger className="h-[3rem] w-[25rem] rounded-full bg-[#e0da95] font-bold">
            <span className="text-black">¿Te gustaría formar parte de nuestro staff?</span>
          </DialogTrigger>
          <DialogContent className="font-ArchivoBlack">
            <DialogHeader>
              <DialogTitle className="text-center text-2xl">¿Cómo envío mis datos?</DialogTitle>
              <DialogDescription>
                <div className="mt-2 flex h-12 items-center justify-between rounded-full bg-white p-5 text-lg text-black">
                  <span className="font-semibold">Para:</span>
                  <span className="font-bold">refreshproducer@gmail.com</span>
                </div>

                <div className="mt-2 flex h-12 items-center justify-between rounded-full bg-white p-5  text-black">
                  <span className="font-semibold">Asunto:</span>
                  <span className="font-bold">Scouting - *Nombre y Apellido* - Modelo</span>
                </div>

                <div className="mt-2 flex flex-col  items-center rounded-xl bg-white  p-5 text-left text-black">
                  <p>
                    Presentación + datos (altura, medidas de pecho / cintura / cadera / talle de
                    remera / pantalón / color de ojos, pelo y piel y edad)
                    <p className="mt-2 text-left font-bold">*Adjuntar 5 fotos tipo polaroids*</p>
                  </p>

                  <div className="ml-5 mt-1 flex w-full flex-col">
                    <ul className="list-disc">
                      <li>
                        <span className="font-bold">Foto 1</span>: Full face
                      </li>

                      <li>
                        <span className="font-bold">Foto 2</span>: Cuerpo completo
                      </li>

                      <li>
                        <span className="font-bold">Foto 3 y 4</span>: Medio cuerpo pose libre
                      </li>

                      <li>
                        <span className="font-bold">Foto 5</span>: Perfil
                      </li>
                    </ul>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
