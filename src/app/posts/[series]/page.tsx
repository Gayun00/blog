import Categories from "@/app/components/Categories";
import Posts from "@/app/components/Posts";
import { getAllPosts, getPostsOfSeries, getSeries } from "@/utils/processPosts";
export const dynamic = "force-static";
export async function generateStaticParams() {
  return [{ series: "Next.js 작동원리" }, { series: "React" }];
}

async function fetchData(series: string) {
  return await getAllPosts();
}

const fetchSeries = async () => {
  return await getSeries();
};

export default function index({ params }: { params?: { series: string } }) {
  return (
    <div className="flex">
      <aside className="hidden relative mt-14 pl-16 basis-1/4 md:block">
        <div className="sticky top-10 w-60">
          {fetchSeries().then((data) => (
            <Categories
              title="Categories"
              list={data}
              currentCategory={decodeURI(params?.series || "")}
            />
          ))}
        </div>
      </aside>

      <main className="px-8 flex flex-col mt-14 mb-40 max-w-lg md:max-w-5xl w-full">
        <h1 className="mb-20 text-3xl text-center">
          Series: {decodeURI(params?.series || "")}
        </h1>
        {fetchData(params?.series || "Next.js").then((data) => (
          <Posts title="Series" posts={data} />
        ))}
      </main>
    </div>
  );
}
