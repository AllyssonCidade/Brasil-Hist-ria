import Image from "next/image";
import React from "react";

const Banner = () => {
  return (
    <section className="w-full h-60 sm:h-80 md:h-80 lg:h-96 xl:h-lg440 2xl:h-screen relative">
      <Image src="/images/Banner.jpeg" fill alt="Banner" />;
    </section>
  );
};

export default Banner;
