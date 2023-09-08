import { TagData } from "@/app/page";
import React from "react";

interface Props {
  tag: TagData;
  isSelected: boolean;
}

function TagItem({ tag, isSelected }: Props) {
  return (
    <div className="flex items-center px-8 py-5 h-2 rounded-md border-2 border-slate-300">
      <p className={`${!isSelected ? "text-slate-500" : ""}`}>{tag.value}</p>
    </div>
  );
}

export default TagItem;
