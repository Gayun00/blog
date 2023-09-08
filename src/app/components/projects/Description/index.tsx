import Image from "next/image";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import remarkGfm from "remark-gfm";

interface Props {
  imageUrl: string;
  description: string;
}

function Description({ imageUrl, description }: Props) {
  return (
    <div className="flex">
      <Image alt="project_thumbnail" width={400} height={30} src={imageUrl} />
      <ReactMarkdown className="prose lg:prose-sm" remarkPlugins={[remarkGfm]}>
        {description}
      </ReactMarkdown>
    </div>
  );
}

export default Description;
