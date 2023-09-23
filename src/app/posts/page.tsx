import PostsCarousel from "../components/PostsCarousel";
import Series from "../components/Series";
import { getFeaturedPosts, getSeries } from "@/utils/processPosts";

export default function index() {
  const featuredPosts = getFeaturedPosts();

  return (
    <div className="flex flex-col items-center">
      <main className="mt-20 px-8 flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
        <PostsCarousel title="추천 글" posts={featuredPosts} />
        {getSeries().then((data) => (
          <Series title="Series" posts={data} />
        ))}
      </main>
    </div>
  );
}
