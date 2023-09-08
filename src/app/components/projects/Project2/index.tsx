import React from "react";
import Project from "..";
import { testMarkdown } from "@/constants/projects";

function Project2() {
  return (
    <Project.List title="동반 성장을 위한 문화 빌드">
      <Project.Item title="오디오 오브젝트 기능 추가">
        <Project.Description
          imageUrl="/images/thumbnails/thumbnail1.png"
          description={testMarkdown}
        />
      </Project.Item>

      <Project.Item title="Progress UI 변경">
        <Project.Description
          imageUrl="/images/thumbnails/thumbnail1.png"
          description="dsf"
        />
      </Project.Item>

      <Project.Item title="이미지 오브젝트 gui 형태로 추가할 수 있도록 탭 추가">
        <Project.Description
          imageUrl="/images/thumbnails/thumbnail1.png"
          description="dsf"
        />
      </Project.Item>
    </Project.List>
  );
}

export default Project2;
