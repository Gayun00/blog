import { PostMetaData } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  data: PostMetaData;
}

function Post({ data }: Props) {
  return (
    <Link href={`/posts/${data.slug}`} className="w-full h-40">
      <div className="p-3 flex items-center justify-center w-full h-40 shadow-new-morph rounded-primary bg-slate-primary">
        {data.thumbnail ? (
          <Image src={data.thumbnail} alt="post_thumbnail" />
        ) : (
          <p>no image</p>
        )}
      </div>

      <div className="mt-4 pl-3">
        <h3 className="text-lg">{data.title}</h3>
        <p className="text-sm overflow-hidden text-ellipsis break-words line-clamp-2">
          {data.description}
        </p>
      </div>
    </Link>
  );
}

export default Post;
