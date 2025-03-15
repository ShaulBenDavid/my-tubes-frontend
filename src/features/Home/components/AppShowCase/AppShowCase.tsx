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
    <section className="flex flex-col gap-2 pt-6">
      <h2 className="text-center text-lg font-bold tb:text-2xl">
        Our Experience
      </h2>
      <Swiper
        slidesPerView={1.7}
        spaceBetween={30}
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
              <Card className="h-full overflow-hidden">
                <h3
                  className="text-lg font-semibold tb:text-xl"
                  style={{ color }}
                >
                  {title}
                </h3>
                <p className="text-base tb:text-lg">{description}</p>
                <Image
                  src={isDesktop ? tabletImage : mobileImage}
                  alt={`Dashboard showcase - ${title}`}
                  loading="lazy"
                  height={0}
                  width={0}
                  className="mt-4 h-full w-full scale-90 object-cover object-top drop-shadow-xl"
                />
              </Card>
            </SwiperSlide>
          ),
        )}
      </Swiper>
    </section>
  );
};
