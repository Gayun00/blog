"use client";

import { useState } from "react";
import Tags from "./components/tags";
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

  return (
    <div className="mt-20 flex justify-center h-screen">
      <Tags.Sentence>
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
      </Tags.Sentence>
    </div>
  );
}
