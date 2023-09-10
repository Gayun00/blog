import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  imageUrl: string;
  description: string;
}

function Detail({ imageUrl, description }: Props) {
  return (
    <div className="mt-5 flex flex-col items-center">
      <Image src={imageUrl} alt="project_thumbnail" width={700} height={300} />
      <ReactMarkdown
        className="prose lg:prose-xl mt-5 w-full"
        remarkPlugins={[remarkGfm]}>
        {description}
      </ReactMarkdown>
    </div>
  );
}

export default Detail;
