"use client";
/* eslint-disable @next/next/no-img-element */
import { BannerProps, fetchBanner } from "@/services/api";
import React, { useEffect } from "react";

// USAR HOST EM AMBIENTE DE DESENVOLVIMENTO
//não sei por que está fazendo isso, mas funciona(antes de subir remova a variavel host )
//em desenvolvimento use uma variavel HOST pegando o .env do localhost e coloque antes das imagens
// const HOST = process.env.NEXT_PUBLIC_HOST_IMG_API;

const Banner = () => {
  const [banner, setBanner] = React.useState<BannerProps>();

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const banner = await fetchBanner();
        setBanner(banner);
        console.log("url", banner.banner[0].url);
      } catch (error) {
        console.error("Erro ao buscar banner:", error);
      }
    };
    loadBanner();
  }, [banner]);

  return (
    <section className="w-full h-60 sm:h-80 md:h-80 lg:h-96 xl:h-lg440 2xl:h-screen relative">
      <img
        src={`${banner?.banner[0].url}`}
        className="object-cover w-full h-full"
        alt="Banner"
      />
    </section>
  );
};

export default Banner;
