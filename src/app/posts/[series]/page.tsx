import Categories from "@/app/components/Categories";
import Series from "@/app/components/Series";

export async function generateStaticParams() {
  return [{ series: "next-js" }, { series: "react" }];
}

function fetchData(series: string) {
  return fetch(`http://localhost:3000/api/posts/${series}`, {
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .then((data) => data);
}

export default function index({ params }: { params?: { series: string } }) {
  return (
    <div className="flex">
      <aside className="hidden relative mt-14 pl-16 basis-1/4 md:block">
        <div className="sticky top-10 w-60">
          <Categories
            title="Categories"
            list={[
              "Next.js",
              "Error report",
              "React",
              "내부 동작원리 파헤치기",
            ]}
          />
        </div>
      </aside>

      <main className="px-8 flex flex-col gap-y-40 max-w-lg md:max-w-5xl w-full">
        <h1>Series: {params?.series || "시리즈 없음"}</h1>
        {fetchData(params?.series || "Next.js").then((data) => (
          <Series title="Series" posts={data.data} />
        ))}
      </main>
    </div>
  );
}
