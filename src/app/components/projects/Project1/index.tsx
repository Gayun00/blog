import React from "react";
import Project from "..";

function Project1() {
  return (
    <Project.List title="개발자 경험 개선">
      <Project.Item
        title="오디오 오브젝트 기능 추가"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      />

      <Project.Item
        title="Progress UI 변경"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      />

      <Project.Item
        title="이미지 오브젝트 gui 형태로 추가할 수 있도록 탭 추가"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      />
    </Project.List>
  );
}

export default Project1;
