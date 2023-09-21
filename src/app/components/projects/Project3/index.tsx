import React from "react";
import Project from "..";
import { testMarkdown } from "@/constants/projects";

function Project3() {
  return (
    <>
      <Project.List title="함께 성장하기">
        <Project.Item
          title="프로젝트 회고 미팅 진행"
          imageUrl="/images/thumbnails/thumbnail1.png"
          description={`- test1\n- test2`}></Project.Item>

        <Project.Item
          title="스프린트 관리"
          imageUrl="/images/thumbnails/thumbnail1.png"
          description={`- test1\n- test2`}></Project.Item>

        <Project.Item
          title="프론트엔드 주간 기술 미팅"
          imageUrl="/images/thumbnails/thumbnail1.png"
          description={`- test1\n- test2`}></Project.Item>

        <Project.Item
          title="프론트엔드 컨퍼런스 런치"
          imageUrl="/images/thumbnails/thumbnail1.png"
          description={`- test1\n- test2`}></Project.Item>
      </Project.List>
    </>
  );
}

export default Project3;
