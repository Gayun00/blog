import React from "react";
import { getFileFromFolder } from "@/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";
import Image from "next/image";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

function getPostContent(fileName: string = "1") {
  const { data, content } = getFileFromFolder("__posts", fileName);

  return {
    data,
    content,
  };
}

export default async function Page({ params }: { params?: { id: string } }) {
  const { data, content } = await getPostContent(params?.id);

  return (
    <div className="pt-16 flex flex-col items-center">
      <Image src={data.thumbnail} alt="post_thumbnail" width={800} height={0} />
      <main className="mt-10">
        <h1 className="mb-10 text-2xl text-center font-medium text-gray-primary">
          {data.title}
        </h1>
        <ReactMarkdown
          className="prose lg:prose-xl"
          remarkPlugins={[remarkGfm]}>
          {content}
        </ReactMarkdown>
      </main>
    </div>
  );
}
