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
    <div className="flex gap-x-10">
      <div>
        <Image
          alt="project_thumbnail"
          width={600}
          height={100}
          src={imageUrl}
        />
      </div>
      <ReactMarkdown className="prose lg:prose-sm" remarkPlugins={[remarkGfm]}>
        {description}
      </ReactMarkdown>
    </div>
  );
}

export default Description;
