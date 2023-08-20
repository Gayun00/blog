import { PostMetaData } from "@/types";
import Link from "next/link";
import React from "react";

interface Props {
  data: PostMetaData;
}

function Post({ data }: Props) {
  return (
    <Link href={`/posts/${data.slug}`}>
      <h3 className="text-xl">{data.title}</h3>
      <p>{data.description}</p>
    </Link>
  );
}

export default Post;
