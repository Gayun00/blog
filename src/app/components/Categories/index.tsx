import Link from "next/link";
import React from "react";

interface Props {
  title: string;
  list: {
    thumbnail: string;
    description: string;
    title: string;
  }[];
  currentCategory: string;
}

function Categories({ title, list, currentCategory }: Props) {
  return (
    <>
      <h1 className="mb-5 text-lg">{title}</h1>
      <ul className="leading-8">
        {list.map((category) => (
          <li
            key={category.title}
            className={`hover:text-primary ${
              category.title === currentCategory ? "text-primary" : ""
            }`}>
            <Link href={`/posts/${encodeURI(category.title)}`}>
              {category.title}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Categories;
