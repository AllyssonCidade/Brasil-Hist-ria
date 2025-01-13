"use client";
/* eslint-disable @next/next/no-img-element */
import { BannerProps, fetchBanner } from "@/services/api";
import React, { useEffect } from "react";

const HOST = process.env.NEXT_PUBLIC_HOST_IMG_API;

const Banner = () => {
  const [banner, setBanner] = React.useState<BannerProps>();

  useEffect(() => {
    const loadBanner = async () => {
      try {
        const banner = await fetchBanner();
        setBanner(banner);
      } catch (error) {
        console.error("Erro ao buscar banner:", error);
      }
    };
    loadBanner();
  }, []);

  return (
    <section className="w-full h-60 sm:h-80 md:h-80 lg:h-96 xl:h-lg440 2xl:h-screen relative">
      <img
        src={`${HOST}${banner?.banner[0].url}`}
        className="object-cover w-full h-full"
        alt="Banner"
      />
    </section>
  );
};

export default Banner;
