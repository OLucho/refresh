"use client";
import {Button} from "@/components/ui/button";

export function ButtonCheckoutWhatsapp() {
  return (
    <div className="mt-4 flex w-full justify-center">
      <Button
        style={{display: "flex", alignItems: "center", gap: "5px"}}
        onClick={() => {
          const mensaje = "¡Hola! Me gustaría formar parte de Refresh.";
          const numeroDeTelefono = "5491173669220";
          const url = `https://wa.me/${numeroDeTelefono}?text=${encodeURIComponent(mensaje)}`;

          window.open(url, "_blank");
        }}
      >
        <img alt="WhatsApp Icon" height="20" src="/whatsapp.svg" width="20" />
        <span>¿Querés conocer el plan de estudio y los valores? Escribinos por acá</span>
      </Button>
    </div>
  );
}
