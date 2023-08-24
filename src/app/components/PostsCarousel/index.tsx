"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PostData } from "@/types";
import { Pagination } from "swiper/modules";

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";
import Post from "../Post";

interface Props {
  title: string;
  posts: PostData[];
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
            <div className="mt-10 w-full h-48">
              <Post data={post} path={`/posts/${post.series}/${post.title}`} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default PostsCarousel;
