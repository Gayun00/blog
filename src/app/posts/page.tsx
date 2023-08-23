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
    <div className="flex">
      <aside className="relative mt-14 pl-10 basis-1/4">
        <div className="sticky top-10">
          <h1 className="mb-5 text-lg">Categories</h1>
          <ul className="leading-8">
            {["Next.js", "Error report", "React", "내부 동작원리 파헤치기"].map(
              (category) => (
                <li key={category}>{category}</li>
              )
            )}
          </ul>
        </div>
      </aside>

      <main className="flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
        <Posts title="Featured Posts" posts={featuredPosts} />
        {/* TODO: category 선택 기능 추가 */}
        <Posts
          title="전체 글 보기"
          posts={[...posts, ...posts, ...posts, ...posts]}
        />
      </main>
    </div>
  );
}
