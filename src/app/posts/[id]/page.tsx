import React from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";

export async function generateStaticParams() {
  return [{ id: "1" }, { id: "2" }, { id: "3" }, { id: "4" }];
}

const postsDirectory = path.join(process.cwd(), "__posts");

function getPostContent(fileName: string = "1") {
  const filePath = path.join(postsDirectory, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  const processor = unified()
    .use(remarkParse)
    .use(remarkHtml as any);
  const contentHtml = processor.processSync(content).toString();

  return {
    data,
    contentHtml,
  };
}

export default async function Page({
  params,
}: {
  params?: { id: string };
  children?: React.ReactNode;
}) {
  const { data, contentHtml } = await getPostContent(params?.id);

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-medium text-gray-100">{data.title}</h1>
      <p className="font-medium text-gray-400">{data.description}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
