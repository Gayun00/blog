import Image from "next/image";
import PostsCarousel from "../components/PostsCarousel";
import Series from "../components/Series";

function fetchPosts() {
  return fetch("http://localhost:3000/api/posts", {
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .then((data) => data.data);
}

// TODO: api 랩핑함수로 분리, constants 사용
const fetchSeries = () => {
  return fetch("http://localhost:3000/api/posts/series", {
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .then((data) => data);
};
export default function index() {
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
          {fetchPosts().then((data) => (
            <PostsCarousel
              title="추천 글"
              // TODO: 전체 추천 글 데이터로 교체
              posts={data}
            />
          ))}
          {/* TODO: category 선택 기능 추가 */}
          {fetchSeries().then((data) => (
            <Series title="Series" posts={data.data} />
          ))}
        </main>
      </div>
    </div>
  );
}
