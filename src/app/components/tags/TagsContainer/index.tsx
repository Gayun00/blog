import React from "react";
import TagItem from "../TagItem";
import { TagData } from "@/app/page";

interface Props {
  tags: TagData[];
  selectedTag: string;
}

function TagsContainer({ tags, selectedTag }: Props) {
  return (
    <div className="flex flex-col gap-y-3">
      {tags.map((tag) => (
        <TagItem
          tag={tag}
          key={tag.type}
          isSelected={tag.type === selectedTag}
        />
      ))}
    </div>
  );
}

export default TagsContainer;
