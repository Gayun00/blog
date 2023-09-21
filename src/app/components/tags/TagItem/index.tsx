import { TagData } from "@/app/page";
import React from "react";

interface Props {
  tag: TagData;
  isSelected: boolean;
  onClick: () => void;
}

function TagItem({ tag, isSelected, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center px-8 py-5 h-2 rounded-md cursor-pointer ${
        isSelected ? "shadow-new-morph text-xl" : ""
      }`}>
      <p className={`10${!isSelected ? "text-slate-500" : ""}`}>{tag.value}</p>
    </div>
  );
}

export default TagItem;
