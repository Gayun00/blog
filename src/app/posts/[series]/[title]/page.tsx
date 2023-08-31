import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { getAllPosts, getPost, getRelatedPosts } from "@/utils/processPosts";

function getPostContent(title: string = "") {
  const res = getPost(decodeURI(title) || "");
  const relatedPosts = getRelatedPosts(decodeURI(title));
  return { data: res, relatedPosts };
}

export async function generateStaticParams() {
  return getAllPosts().map((post) => ({
    series: post.series,
    title: post.title,
  }));
}

export default async function index({
  params,
}: {
  params?: { series: string; title: string };
}) {
  const response = await getPostContent(params?.title || "");
  const [prevPost, nextPost] = response.relatedPosts;
  return (
    <div className="pt-16 flex flex-col items-center">
      <Image
        src={response.data.thumbnail}
        alt="post_thumbnail"
        width={800}
        height={0}
      />
      <main className="mt-10">
        <h1 className="mb-10 text-2xl text-center font-medium text-gray-primary">
          {response.data.title}
        </h1>
        <ReactMarkdown
          className="prose lg:prose-xl"
          remarkPlugins={[remarkGfm]}>
          {response.data.content}
        </ReactMarkdown>
      </main>
      <div className="flex justify-between w-full">
        {prevPost && (
          <Link
            href={`/posts/${encodeURI(prevPost.series)}/${encodeURI(
              prevPost.title
            )}`}
            className="p-6 flex flex-col justify-center items-end gap-y-3 bg-slate-primary rounded-primary shadow-new-morph w-64 h-32">
            <div className="flex items-center">
              <BsArrowLeftShort />
              <p className="text-sm">이전 글</p>
            </div>
            <p className="overflow-hidden w-full text-ellipsis text-end">
              {prevPost.title}
            </p>
          </Link>
        )}
        {nextPost && (
          <Link
            href={`/posts/${encodeURI(nextPost.series)}/${encodeURI(
              nextPost.title
            )}`}
            className="p-6 flex flex-col justify-center gap-y-3 bg-slate-primary rounded-primary shadow-new-morph w-64 h-32">
            <div className="flex items-center">
              <p className="text-sm">다음 글</p>
              <BsArrowRightShort />
            </div>
            <p className="overflow-hidden w-full text-ellipsis">
              {nextPost.title}
            </p>
          </Link>
        )}
      </div>
    </div>
  );
}
