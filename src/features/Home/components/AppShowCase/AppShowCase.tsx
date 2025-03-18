"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, EffectCoverflow } from "swiper/modules";
import { useMediaQuery } from "@/src/hooks";
import { Card } from "@/src/components/Card";
import { appShowCaseConfig } from "./AppShowCase.config";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export const AppShowCase = (): JSX.Element => {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <section className="flex flex-col gap-3">
      <h2 className="text-center text-lg font-bold tb:text-2xl">
        Our Experience
      </h2>
      <Swiper
        slidesPerView={isDesktop ? 1.7 : 1.3}
        spaceBetween={isDesktop ? 30 : 15}
        loop
        pagination={{
          clickable: true,
        }}
        centeredSlides
        modules={[Pagination, EffectCoverflow]}
        className="h-96 w-full"
        grabCursor
        effect="coverflow"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          scale: 0.9,
        }}
      >
        {appShowCaseConfig.map(
          ({ title, description, tabletImage, mobileImage, color }) => (
            <SwiperSlide key={title}>
              <Card className="flex h-full flex-col overflow-hidden">
                <h3
                  className="text-lg font-semibold tb:text-xl"
                  style={{ color }}
                >
                  {title}
                </h3>
                <p className="text-sm tb:text-lg">{description}</p>
                <Image
                  src={isDesktop ? tabletImage : mobileImage}
                  alt={`Dashboard showcase - ${title}`}
                  loading="lazy"
                  height={0}
                  width={0}
                  className="mt-4 h-full w-full scale-100 object-contain object-top drop-shadow-xl tb:scale-90 tb:object-cover"
                />
              </Card>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};
