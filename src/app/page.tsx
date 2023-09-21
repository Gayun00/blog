"use client";

import { useState } from "react";
import Tags from "./components/tags";
import Project from "./components/projects";
import { testMarkdown } from "@/constants/projects";
import Project1 from "./components/projects/Project1";
import Project2 from "./components/projects/Project2";
import Project3 from "./components/projects/Project3";
// TODO: constants로 이동
const TAG = {
  TAG1: "tag1",
  TAG2: "tag2",
  TAG3: "tag3",
};
const tags = [
  {
    type: TAG.TAG1,
    value: "그로스에 대한 관심과 이해도, 경험이 있는",
  },
  {
    type: TAG.TAG2,
    value: "DX와 UX를 최적화하는 데 가치를 두는",
  },
  {
    type: TAG.TAG3,
    value: "꾸준히 함께 성장하는",
  },
];

export interface TagData {
  type: string;
  value: string;
}

export default function Home() {
  const [selectedTag, setSelectedTag] = useState(TAG.TAG1);
  const handleTagSelect = (tag: string) => {
    setSelectedTag(tag);
  };

  const translateSpace = {
    [TAG.TAG1]: "translate-y-0",
    [TAG.TAG2]: "-translate-y-13",
    [TAG.TAG3]: "-translate-y-26",
  };

  const projects = {
    [TAG.TAG1]: <Project1 />,
    [TAG.TAG2]: <Project2 />,
    [TAG.TAG3]: <Project3 />,
  };

  return (
    <div className="mt-24 flex flex-col items-center h-screen">
      <Tags.Sentence>
        <div className="w-1/2">
          <Tags.List selectedTag={selectedTag} translateSpace={translateSpace}>
            {tags.map((tag) => (
              <Tags.Item
                key={tag.type}
                tag={tag}
                isSelected={tag.type === selectedTag}
                onClick={() => handleTagSelect(tag.type)}
              />
            ))}
          </Tags.List>
        </div>
      </Tags.Sentence>

      <div className="mt-10" />

      {projects[selectedTag]}
    </div>
  );
}
