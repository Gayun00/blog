import fs from "fs";
import matter from "gray-matter";
import path from "path";

async function fetchData() {
  const postsDirectory = path.join(process.cwd(), "__posts");
  const fileNames = fs.readdirSync(postsDirectory);
  const posts = fileNames.map(
    (
      fileName
    ): {
      slug: string;
      title: string;
      description: string;
    } => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);

      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        description: data.description,
      };
    }
  );

  return posts;
}

export default async function index() {
  const posts = await fetchData();

  return (
    <div>
      <h1>Post Titles</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.slug}>
            {post.title}
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
