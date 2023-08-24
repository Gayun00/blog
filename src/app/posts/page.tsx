import { PostMetaData } from "@/types";
import { getListFromFolder, getSeries } from "@/utils";
import Posts from "../components/Posts";
import PostsCarousel from "../components/PostsCarousel";

function fetchData() {
  return getListFromFolder<PostMetaData>("__posts");
}

export default function index() {
  const posts = fetchData();
  const featuredPosts = posts.filter((post) => post.featured);
  const seriesList = getSeries();
  return (
    <div className="flex">
      <main className="px-8 flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
        <PostsCarousel
          title="추천 글"
          // TODO: 전체 추천 글 데이터로 교체
          posts={[...featuredPosts, ...featuredPosts, ...featuredPosts]}
        />
        {/* TODO: category 선택 기능 추가 */}
        <Posts
          title="전체 글 보기"
          posts={[...posts, ...posts, ...posts, ...posts]}
        />
      </main>
    </div>
  );
}
