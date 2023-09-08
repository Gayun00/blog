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
            description={`- 멘토링 도중 창작중인 프로젝트의 자동 저장 시 표시되는 Progress UI가 studio 인터페이스의 상호작용을 막아 유저가 불편함을 느끼는 것을 발견\n- 자세한 UX/UI 기획 가이드라인 없이 기존의 저장 버튼 클릭시 저장되는 기능이 그대로 일정시간을 주기로 실행되는 방식으로 자동저장 기능이 구현되었음\n- 테스트 시점과 달리 유저의 프로젝트는 용량이 커 오랜 시간 동안 창작이 중단되는 문제가 있었음\n- 기획/디자인 파트와 논의해 토스트 팝업으로 변경`}
          />
        </Project.Item>

        <Project.Item title="이미지 오브젝트 gui 형태로 추가할 수 있도록 탭 추가">
          <Project.Description
            imageUrl="/images/thumbnails/thumbnail1.png"
            description={`- 기존: 이미지 파일을 업로드하면 넓은 판 형태의 오브젝트로 3D studio에 추가하는 기능만 존재\n- 유저가 필요한 이미지파일을 업로드해 gui형태로 추가해 사용하고 싶다는 니즈가 많았음\n- 기획단에서 임시로 유저가 요청한 이미지 파일을 gui 에셋 영역에 추가해달라는 요청을 받았으나, 간단히 gui형태로 추가할 수 있도록 버튼을 추가하는 방식을 제안\n- 이후 에셋 추가 요청, 공개여부 등 추가 이슈 없이 간단하게 해결!`}
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
