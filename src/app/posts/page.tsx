import fs from "fs";
import matter from "gray-matter";
import Link from "next/link";
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
      featured: boolean;
    } => {
      const filePath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(filePath, "utf8");
      const { data } = matter(fileContents);
      return {
        slug: fileName.replace(/\.md$/, ""),
        title: data.title,
        description: data.description,
        featured: data.featured,
      };
    }
  );

  return posts;
}

export default async function index() {
  const posts = await fetchData();
  const featuredPosts = posts.filter((post) => post.featured);

  return (
    <div>
      <h1>Featured Posts</h1>
      <ul>
        {featuredPosts.map((post: any) => (
          <Link href={`/posts/${post.slug}`} key={post.slug}>
            <h1>{post.title}</h1>
            <p>{post.description}</p>
          </Link>
        ))}
      </ul>
    </div>
  );
}
