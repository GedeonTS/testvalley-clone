import React, { useEffect, useState } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { BannerProps } from "@/app/commons/types/banner";
import { getBannerList } from "@/app/services/banner";

export default function Banner() {
  const [banners, setBanners] = useState<BannerProps[]>([]);

  useEffect(() => {
    getBannerList()
      .then((value) => {
        console.log(value.data);
        const rawData = value.data;
        if (Array.isArray(rawData)) {
          setBanners(rawData);
        } else {
          console.error("Invalid data :", rawData);
        }
      })
      .catch((error) => {
        console.error("Error fetching:", error);
      });
  }, []);

  return (
    <section className="flex w-full">
      <Swiper
        slidesPerView={1.5}
        height={320}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          enabled: true,
          delay: 3000,
          disableOnInteraction: false, 
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={{
          enabled: true,
        }}
        
        modules={[Autoplay, Navigation, Pagination ]}
        className="flex items-center justify-center"
      >
        {banners.map((banner, i) => (
          <SwiperSlide key={i}>
            <a href={banner.linkUrl}>
              <img
                src={banner.pcImageUrl}
                alt={`Banner ${i + 1}`}
                className="hidden lg:flex"
              />
              <img
                src={banner.mobileImageUrl}
                alt={`Banner ${i + 1}`}
                className="lg:hidden"
              />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
