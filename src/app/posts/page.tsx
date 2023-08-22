import { PostMetaData } from "@/types";
import { getListFromFolder } from "@/utils";
import Posts from "../components/Posts";

function fetchData() {
  return getListFromFolder<PostMetaData>("__posts");
}

export default function index() {
  const posts = fetchData();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div className="flex flex-col gap-y-28">
      <Posts title="Featured Posts" posts={featuredPosts} />
      {/* TODO: category 선택 기능 추가 */}
      <Posts title="전체 글 보기" posts={posts} />
    </div>
  );
}
