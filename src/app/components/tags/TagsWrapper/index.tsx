import React from "react";
import TagsContainer from "../TagsContainer";
import { TagData } from "@/app/page";

interface Props {
  tags: TagData[];
  selectedTag: string;
}

function TagsWrapper({ tags, selectedTag }: Props) {
  return (
    <div className="px-20 flex justify-between items-center h-36 gap-x-20">
      <p className="text-xl">저는</p>
      <TagsContainer tags={tags} selectedTag={selectedTag} />
      <p className="text-xl">개발자입니다.</p>
    </div>
  );
}

export default TagsWrapper;
