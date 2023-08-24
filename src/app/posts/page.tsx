import { PostData } from "@/types";
import { getListFromFolder } from "@/utils";
import Posts from "../components/Posts";
import PostsCarousel from "../components/PostsCarousel";
import Series from "../components/Series";

function fetchPosts() {
  return fetch("http://localhost:3000/api/posts?filter=featured", {})
    .then((res) => res.json())
    .then((data) => data);
}

// TODO: api 랩핑함수로 분리, constants 사용
const fetchSeries = () => {
  return fetch("http://localhost:3000/api/posts/series", {})
    .then((res) => res.json())
    .then((data) => data);
};
export default function index() {
  return (
    <div className="flex">
      <main className="px-8 flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
        {fetchPosts().then((data) => (
          <PostsCarousel
            title="추천 글"
            // TODO: 전체 추천 글 데이터로 교체
            posts={data.data}
          />
        ))}
        {/* TODO: category 선택 기능 추가 */}
        {fetchSeries().then((data) => (
          <Series title="Series" posts={data.data} />
        ))}
      </main>
    </div>
  );
}
