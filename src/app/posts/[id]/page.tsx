import React from "react";
import { getFileFromFolder } from "@/utils";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

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
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <ReactMarkdown className="prose lg:prose-xl" remarkPlugins={[remarkGfm]}>
        {content}
      </ReactMarkdown>
    </div>
  );
}
