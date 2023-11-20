import Image from "next/image";
import { getFeaturedPosts, getSeries } from "@/utils/processPosts";
import PostsCarousel from "./components/PostsCarousel";
import Series from "./components/Series";

export default function index() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="flex flex-col items-center">
      <section className="flex items-center h-40">
        <Image src="/images/logo.svg" alt="logo" width={80} height={30} />
        <p className="ml-10 whitespace-pre-wrap">
          {`Why?에서 시작해 How를 찾는 과정을 좋아합니다. \n 그 고민과 성장의 과정을 꾸준히 기록하고자 합니다.`}
        </p>
      </section>
      <div className="flex justify-center">
        <main className="px-8 flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
          <PostsCarousel title="추천 글" posts={featuredPosts} />
          {getSeries().then((data) => (
            <Series title="Series" posts={data} />
          ))}
        </main>
      </div>
    </div>
  );
}
