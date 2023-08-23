"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { PostMetaData } from "@/types";
import Post from "../Post";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

interface Props {
  posts: PostMetaData[];
}
function Carousel({ posts }: Props) {
  return (
    <div className="w-full">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        className="mySwiper"
        spaceBetween={50}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
          1021: {
            slidesPerView: 4,
          },
        }}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {posts?.map((post) => (
          <SwiperSlide key={post.title} className="pb-10">
            <Post data={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
