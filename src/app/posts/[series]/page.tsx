import { getPostsOfSeries, getSeries } from "@/utils/processPosts";
import Categories from "@/app/components/Categories";
import Posts from "@/app/components/Posts";

export async function generateStaticParams() {
  return getSeries().then((seriesList) =>
    seriesList.map((series) => ({ series: encodeURI(series.title) }))
  );
}

export default function index({ params }: { params?: { series: string } }) {
  const postsOfSeries = getPostsOfSeries(decodeURI(params?.series || ""));

  return (
    <div className="flex">
      <aside className="hidden relative mt-14 pl-16 basis-1/4 md:block">
        <div className="sticky top-10 w-60">
          {getSeries().then((data) => (
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
        <Posts title="Series" posts={postsOfSeries} />
      </main>
    </div>
  );
}
