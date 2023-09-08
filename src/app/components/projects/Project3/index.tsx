import React from "react";
import Project from "..";
import { testMarkdown } from "@/constants/projects";

function Project3() {
  return (
    <>
      <Project.List title="챌린저스 멘토링">
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

      <Project.List title="스튜디오 성능 최적화">
        <Project.Item title="이미지 에셋 포맷 변경">
          <Project.Description
            imageUrl="/images/thumbnails/thumbnail1.png"
            description={testMarkdown}
          />
        </Project.Item>
      </Project.List>
    </>
  );
}

export default Project3;
