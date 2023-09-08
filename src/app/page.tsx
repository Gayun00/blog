"use client";

import TagsWrapper from "./components/tags/TagsWrapper";

export default function Home() {
  return (
    <div>
      <TagsWrapper tags={["tag 1", "tag 2", "tag 3"]} />
    </div>
  );
}
