import React from "react";

interface Props {
  tag: any;
}

function Tag({ tag }: Props) {
  return <div>{tag}</div>;
}

export default Tag;
