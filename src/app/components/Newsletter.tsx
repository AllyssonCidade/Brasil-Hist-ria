import React from "react";

function Newsletter() {
  return (
    <section>
      <div className="w-full h-2 bg-black " />
      <div className="flex flex-col mb-5 pt-2 gap-4 w-11/12 m-auto md:px-28 lg:px-56 xl:px-96">
        <h4 className="text-2xl tracking-25p text-center">
          Receba nossas atualizações
        </h4>
        <p className="text-center font-extralight text-xl">
          Preencha seu e-mail para receber conteúdos exclusivos
        </p>
        <form className="flex flex-row justify-center w-full">
          <input
            className="border-x border-y border-black pl-2 w-full"
            type="email"
            placeholder="Digite seu E-Mail aqui..."
          />
          <button
            className="border-4 border-black bg-black text-white p-1 px-2"
            type="submit"
          >
            Enviar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter;
