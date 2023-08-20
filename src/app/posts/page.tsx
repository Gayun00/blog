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
    <div>
      <Posts title="Featured Posts" posts={featuredPosts} />
    </div>
  );
}
