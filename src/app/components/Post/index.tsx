import React from "react";
import Image from "next/image";
import Link from "next/link";
import { PostData, SeriesDataWithTitle } from "@/types";

interface Props {
  data: PostData | SeriesDataWithTitle;
  path: string;
}

function Post({ data, path }: Props) {
  return (
    <Link href={encodeURI(path)} className="w-full max-w-sm h-full md:h-48">
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
