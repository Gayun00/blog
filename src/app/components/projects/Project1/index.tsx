import React from "react";
import Project from "..";

function Project1() {
  return (
    <Project.DescriptionList title="그로스 해킹 프로젝트">
      {/* <Project.Item
        title="오디오 오브젝트 기능 추가"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      /> */}

      <div className="flex flex-col gap-y-10">
        <Project.Description
          description={`**코드 스테이츠 (2020.8~2020.9)**\n-**페잉 유저 증대를 위한 신규 데이터 분석 코스 랜딩페이지 기획과 퍼널 개선**
\n- 랜딩페이지 기획 : 구매자 증대를 위해 랜딩 페이지 개선\n- 핵심 퍼널 정의 : 페잉 유저 증대를 위해 CX 데이터를 활용, 사용자 이탈 요인을 분석하고 검증 및 대안 제안\n- 가설 도출 : 사용자 인터뷰 등 직접 관찰한 정량 데이터를 바탕으로 통점을 도출
            \n- Course Cell, Customer Experience Cell과의 협업\n- 채널 io 마케팅 캠페인과 타입폼 질문지를 통한 스모크 테스트\n- 목표 : 유입고객 유형 파악, 잠재고객의 가장 강력한 통점과 동기부여 요소를 파악해 소구점을 잡기 위함\n- 50개 리드 수집 : 유입 고객 유형에 따라 통점 세분화\n- 마케팅 채널 발굴 : 채널 IO의 마케팅 상품을 이용해, 마케팅 메세지 A/B 테스트`}
          imageUrl="/images/thumbnails/thumbnail1.png"></Project.Description>

        <Project.Description
          description={`**팀 프로젝트 (2020.7~2020.8)**\n\n**-'누군가를 위한 플레이 리스트' 스모크 테스트를 통한 사전 수요 조사 및 리드 수집**
        \n---
        \n- 서비스 기획 :  감성제목으로 넷플릭스 작품을 추천하고 공유하는 플랫폼 기획\n- 퍼소나와 JTBD 수립, 핵심 그로스 퍼널 정의\n- 프로덕트 개선 : JTBD 구체화에 따른 피벗과 서비스 아이덴티티 구체화
            \n- 랜딩페이지 : Miro, Unbounce 웹빌더 활용\n- GTM 태그를 활용한 CTA 클릭 이벤트 추적\n- 메인 CTA 버튼 A/B 테스트 후 Beusable 과 GA를 통해 결과 분석\n- 사용자 온보딩 프로세스 과정에서의 Friction을 발견하기 위한 챗봇형태의 타입폼 심고 구글 스프레드 시트 및 트렐로 연동을 통한 데이터베이스 구축
            \n- 광고 소재 기획/집행 - 구글 디스플레이 광고, 페이스북, 인스타그램\n- UTM을 활용한 유입 경로 추적 후 집중 매체 선정\n- Super Matrix를 통한 페이스북, 인스타그램, 구글 광고 결과 보고서 작성\n- 광고 A/B 테스트`}
          imageUrl="/images/thumbnails/thumbnail1.png"></Project.Description>
      </div>
      {/* <Project.Item
        title="Progress UI 변경"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      />

      <Project.Item
        title="이미지 오브젝트 gui 형태로 추가할 수 있도록 탭 추가"
        imageUrl="/images/thumbnails/thumbnail1.png"
        description={`- test1\n- test2`}
      /> */}
    </Project.DescriptionList>
  );
}

export default Project1;
