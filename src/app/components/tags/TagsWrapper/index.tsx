import React from "react";
import TagsContainer from "../TagsContainer";

interface Props {
  tags: any;
}

function TagsWrapper({ tags }: Props) {
  return (
    <div className="flex">
      <p>저는</p>
      <TagsContainer tags={tags} />
      <p>개발자입니다.</p>
    </div>
  );
}

export default TagsWrapper;
