import fs from "fs";
import matter from "gray-matter";
import path from "path";
// TODO: test 환경 구축 관련 에러 수정 필요
// import unified from "unified";
import remarkParse from "remark-parse";
import remarkHtml from "remark-html";
import { PostData, SeriesData, SeriesDataWithTitle } from "@/types";

// TODO: promise 사용
// TODO: 바뀐 폴더구조에 맞게 로직 변경 (시리즈 하위 파일 모두를 가져오도록)
export const getAllPosts = <TData>(dir = "__posts2") => {
  const postsDirPath = path.join(process.cwd(), dir);
  const postsDir = fs.readdirSync(postsDirPath);
  const posts = postsDir.reduce((acc: any, series: any) => {
    const seriesPath = path.join(postsDirPath, series);
    const seriesDir = fs.readdirSync(seriesPath);
    const seriesPosts = seriesDir
      .filter((postName) => postName !== "data.md")
      .map((postName) => {
        const postPath = path.join(seriesPath, postName);
        const fileContents = fs.readFileSync(postPath, "utf8");
        const { data } = matter(fileContents);
        return {
          ...data,
          series,
          title: postName.replace(".md", ""),
        } as TData;
      });
    return [...acc, ...seriesPosts];
  }, []);

  return posts;
};

export const getRelatedPosts = (currentPostTitle: string) => {
  const posts = getAllPosts();
  const onlyPosts = posts
    .filter((post) => post.title !== "data")
    .sort((a, b) => a.title - b.title);
  const currentPostIdx = onlyPosts.findIndex(
    (post) => post.title === currentPostTitle
  );

  return [onlyPosts[currentPostIdx - 1], onlyPosts[currentPostIdx + 1]];
};

export const getSeries = (): Promise<SeriesDataWithTitle[]> => {
  return new Promise((resolve) => {
    const postsFolderPath = path.join(process.cwd(), "__posts2");

    const result: SeriesDataWithTitle[] = [];
    fs.readdir(postsFolderPath, (_, folders) => {
      const promises = folders.map((folderName) => {
        const seriesPath = path.join(postsFolderPath, folderName);
        const seriesDataPath = path.join(seriesPath, "data.md");

        return getSeriesData(seriesDataPath).then((data) => {
          const seriesData = {
            title: folderName,
            ...data,
          };
          result.push(seriesData);
        });
      });

      Promise.all(promises).then(() => {
        resolve(result.sort((a, b) => a.title.localeCompare(b.title)));
      });
    });
  });
};

const getSeriesData = (dataPath: string): Promise<SeriesData> => {
  return new Promise((resolve) => {
    fs.readFile(dataPath, "utf8", (err, mdContent) => {
      const { data } = matter(mdContent);
      resolve({
        description: data.description,
        thumbnail: data.thumbnail,
      });
    });
  });
};

export const getPostsOfSeries = <TData>(series: string) => {
  const postsFolderPath = path.join(process.cwd(), `__posts2/${series}`);
  const fileNames = fs.readdirSync(postsFolderPath);
  const postNames = fileNames.filter((fileName) => fileName !== "data.md");
  const posts = postNames.map((fileName) => {
    const filePath = path.join(postsFolderPath, fileName);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    const postData = {
      ...data,
      series,
      title: fileName.replace(".md", ""),
    };
    return postData as TData;
  });

  return posts;
};

export const getPost = (title: string): PostData[] => {
  const posts = getAllPosts();
  const matchedPost = posts.find((post) => post.title === title);
  return matchedPost;
};

// export const convertMarkdownToHtml = (markdown: string) => {
//   // TODO: 구체적인 타입 지정
//   const processor = unified
//     .unified()
//     .use(remarkParse)
//     .use(remarkHtml as any);
//   return processor.processSync(markdown).toString();
// };
