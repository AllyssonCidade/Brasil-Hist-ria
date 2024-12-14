import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section className="flex flex-row justify-between px-2 py-3 md:py-4 lg:py-8 xl:py-12 md:px-3 lg:px-14 xl:px-24 ">
      <div className="flex gap-2 md:gap-6 flex-col lg:gap-10">
        <div>
          <h3 className="text-2xl lg:text-3xl lg:w-96">
            Seu progresso com artigos e vídeos de qualidade
          </h3>
          <p className="lg:text-sm lg:w-96 text-xs">
            Informação útil para seus estudos, sendo entregue de forma singular
            e agradável
          </p>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="lg:w-10 lg:h-10 relative w-8 h-8">
              <Image
                src="/images/Arrow.png"
                alt="Seta diagonal esquerda/direita para cima"
                fill
              />
            </div>
            <div>
              <h4 className="text-lg lg:text-2xl lg:w-72 ">
                66% a mais de chance
              </h4>
              <p className="lg:text-sm lg:w-72 text-xs">
                de passar em um concurso público
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="hidden md:block md:w-52 lg:w-72 md:h-48 lg:h-64 relative md:mr-5 lg:mr-10 xl:mr-32">
        <Image src="/images/Benefits.png" alt="Motivos de sucesso" fill />
      </div>
    </section>
  );
};

export default Benefits;
