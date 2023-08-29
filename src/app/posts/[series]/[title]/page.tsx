import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";

function getPostContent(series: string, title: string = "") {
  return fetch(`http://localhost:3000/api/posts?title=${encodeURI(title)}`, {
    next: { revalidate: 0 },
  })
    .then((res) => res.json())
    .then((data) => data.data);
}

export async function generateStaticParams() {
  return [
    { title: encodeURI("예시 포스트 1!") },
    { title: encodeURI("예시 포스트 2!") },
    { title: encodeURI("예시 포스트 3!") },
    { title: encodeURI("예시 포스트 4!") },
  ];
}

export default async function Page({
  params,
}: {
  params?: { series: string; title: string };
}) {
  // TODO: add params.title
  const response = await getPostContent(
    params?.series || "",
    params?.title || ""
  );
  console.log(response, "response");
  return (
    <div className="pt-16 flex flex-col items-center">
      <Image
        src={response.thumbnail}
        alt="post_thumbnail"
        width={800}
        height={0}
      />
      <main className="mt-10">
        <h1 className="mb-10 text-2xl text-center font-medium text-gray-primary">
          {response.title}
        </h1>
        <ReactMarkdown
          className="prose lg:prose-xl"
          remarkPlugins={[remarkGfm]}>
          {response.content}
        </ReactMarkdown>
      </main>
      <div className="flex justify-between w-full">
        {/* TODO: 이전글/다음글 로직 변경 */}
        <Link
          href={`/posts`}
          className="flex items-center justify-center gap-x-3 bg-slate-primary rounded-primary shadow-new-morph w-28 h-16">
          <BsArrowLeftShort />
          이전 글
        </Link>
        <Link
          href={`/posts`}
          className="flex items-center justify-center gap-x-3 bg-slate-primary rounded-primary shadow-new-morph w-28 h-16">
          다음 글
          <BsArrowRightShort />
        </Link>
      </div>
    </div>
  );
}
