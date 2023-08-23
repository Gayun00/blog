"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { PostMetaData } from "@/types";
import Post from "../Post";

interface Props {
  posts: PostMetaData[];
}
function Carousel({ posts }: Props) {
  return (
    <div className="w-full">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}>
        {posts?.map((post) => (
          <SwiperSlide key={post.title}>
            <Post data={post} />
          </SwiperSlide>
        ))}
        ...
      </Swiper>
    </div>
  );
}

export default Carousel;
