import React from "react";

import { convertMarkdownToHtml, getFileFromFolder } from "@/utils";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }];
}

function getPostContent(fileName: string = "1") {
  const { data, content } = getFileFromFolder("__posts", fileName);
  const contentHtml = convertMarkdownToHtml(content);

  return {
    data,
    contentHtml,
  };
}

export default async function Page({ params }: { params?: { id: string } }) {
  const { data, contentHtml } = await getPostContent(params?.id);
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
