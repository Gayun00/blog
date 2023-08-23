import { PostMetaData } from "@/types";
import { getListFromFolder } from "@/utils";
import Posts from "../components/Posts";
import PostsCarousel from "../components/PostsCarousel";

function fetchData() {
  return getListFromFolder<PostMetaData>("__posts");
}

export default function index() {
  const posts = fetchData();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="mt-28 mb-52 flex flex-col gap-y-28 h-auto">
      <PostsCarousel
        title="추천 글"
        // TODO: 전체 추천 글 데이터로 교체
        posts={[...featuredPosts, ...featuredPosts, ...featuredPosts]}
      />
      {/* TODO: category 선택 기능 추가 */}
      <Posts title="전체 글 보기" posts={posts} />
    </div>
  );
}
