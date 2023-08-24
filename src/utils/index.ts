import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { unified } from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { PostMetaData } from "@/types";

// TODO: promise 사용
export const getListFromFolder = <TData>(directoryName: string) => {
  const directoryPath = path.join(process.cwd(), directoryName);
  const fileNames = fs.readdirSync(directoryPath);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    return data as TData;
  });

  return posts;
};

export const getFileFromFolder = (directoryName: string, fileName: string) => {
  const directoryPath = path.join(process.cwd(), directoryName);

  const filePath = path.join(directoryPath, `${fileName}.md`);
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);
  return { data, content };
};

export const getSeries = () => {
  const directoryPath = path.join(process.cwd(), "__posts");
  const fileNames = fs.readdirSync(directoryPath);
  const posts = fileNames.map((fileName) => {
    const filePath = path.join(directoryPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
  });

  return posts;
};

export const convertMarkdownToHtml = (markdown: string) => {
  // TODO: 구체적인 타입 지정
  const processor = unified()
    .use(remarkParse)
    .use(remarkHtml as any);
  return processor.processSync(markdown).toString();
};
