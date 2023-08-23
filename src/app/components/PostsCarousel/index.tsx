"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { PostMetaData } from "@/types";
import { Pagination } from "swiper/modules";

import Post from "../Post";
import PostsLayout from "../layouts/PostsLayout";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css";

interface Props {
  title: string;
  posts: PostMetaData[];
}
function PostsCarousel({ title, posts }: Props) {
  return (
    <PostsLayout title={title}>
      <div className="w-full">
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
            1021: {
              slidesPerView: 4,
            },
          }}>
          {posts?.map((post, idx) => (
            <SwiperSlide key={idx} className="bg-slate-primary">
              <Post data={post} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </PostsLayout>
  );
}

export default PostsCarousel;
