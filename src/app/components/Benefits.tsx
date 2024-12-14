import Image from "next/image";
import React from "react";

const Benefits = () => {
  return (
    <section className="flex flex-row justify-between px-24">
      <div className="flex py-6 flex-col gap-10">
        <div>
          <h3 className="text-3xl w-96">
            Seu progresso com artigos e vídeos de qualidade
          </h3>
          <p className="text-sm w-96">
            Informação útil para seus estudos, sendo entregue de forma singular
            e agradável
          </p>
        </div>
        <div>
          <div className="flex flex-row">
            <div className="w-10 h-10 relative">
              <Image
                src="/images/Arrow.png"
                alt="Seta diagonal esquerda/direita para cima"
                fill
              />
            </div>
            <div>
              <h4 className="text-2xl w-72">66% a mais de chance</h4>
              <p className="text-sm w-72">de passar em um concurso público</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-72 h-64 relative mr-32">
        <Image src="/images/Benefits.png" alt="Motivos de sucesso" fill />
      </div>
    </section>
  );
};

export default Benefits;
