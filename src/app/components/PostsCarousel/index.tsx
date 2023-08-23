"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PostMetaData } from "@/types";
import { Pagination } from "swiper/modules";

import Post from "../Post";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

interface Props {
  title: string;
  posts: PostMetaData[];
}
function PostsCarousel({ title, posts }: Props) {
  return (
    <div className="w-full">
      <h2 className="text-2xl mb-5 md:ml-3">{title}</h2>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        modules={[Pagination]}
        spaceBetween={50}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 3,
          },
        }}>
        {posts?.map((post, idx) => (
          <SwiperSlide key={idx} className="mb-10 bg-slate-primary">
            <Post data={post} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PostsCarousel;
