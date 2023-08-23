import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostMetaData } from "@/types";

interface Props {
  data: PostMetaData;
}

function Post({ data }: Props) {
  return (
    <Link href={`/posts/${data.slug}`} className="w-full max-w-xs h-40 md:h-48">
      <div className="p-2 flex items-center justify-center w-full h-full shadow-new-morph rounded-primary bg-slate-primary overflow-hidden">
        {data.thumbnail ? (
          <div className="relative w-full h-full overflow-hidden rounded-primary">
            <Image
              src={data.thumbnail}
              layout="fill"
              objectFit="cover"
              alt="post_thumbnail"
            />
          </div>
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
