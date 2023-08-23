import React from "react";

interface Props {
  title: string;
  list: any;
}

function Categories({ title, list }: Props) {
  return (
    <>
      <h1 className="mb-5 text-lg">{title}</h1>
      <ul className="leading-8">
        {list.map((category: any) => (
          <li key={category} className="hover:text-primary">
            {category}
          </li>
        ))}
      </ul>
    </>
  );
}
export default Categories;
