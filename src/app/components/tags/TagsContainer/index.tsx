import React from "react";
import Tag from "../Tag";

interface Props {
  tags: any;
}

function TagsContainer({ tags }: Props) {
  return (
    <div>
      {tags.map((tag: any) => (
        <Tag tag={tag} key={tag} />
      ))}
    </div>
  );
}

export default TagsContainer;
