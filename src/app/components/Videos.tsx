"use client";
import React, { useEffect, useState } from "react";

import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { fetchVideos, VideoProps } from "@/services/api";

function Videos() {
  const [videos, setVideos] = useState<VideoProps[]>([]);

  useEffect(() => {
    const loadVideos = async () => {
      const data = await fetchVideos();
      setVideos(data);
      console.log("VIDEO.URL", videos[1].video[0].url);
    };
    loadVideos();
  }, [videos]);
  return (
    <section className="flex flex-col gap-2  py-12 px-2 ">
      <div className="w-full h-1 bg-black" />
      <h3 className="text-lg md:text-2xl lg:text-3xl text-center tracking-25p py-2 md:py-6 lg:py-8">
        Videos e Aulas Recentes
      </h3>
      <div className="w-full">
        {/* SWIPPER PARA VIDEO */}
        <Swiper
          // navigation={true}
          draggable={true}
          pagination={{ type: "bullets", clickable: true }}
          autoplay={false}
          slidesPerView={1.1}
          spaceBetween={20}
          loop={false}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {videos.map((video) => (
            <SwiperSlide key={video.id}>
              <div className="py-7">
                <iframe
                  draggable={true}
                  width="100%"
                  height="100%"
                  className="rounded-xl md:h-80 lg:h-lg440 m-auto lg:w-3/4 shadow-md"
                  src={video.url ? video.url : video.video[0].url}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                ></iframe>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Videos;
