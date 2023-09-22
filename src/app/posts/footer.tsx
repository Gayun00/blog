import React from "react";
import LinkButton from "../components/LinkButton";
import Image from "next/image";

function Footer() {
  return (
    <section className="my-20 p-10 flex items-center justify-between w-4/5 border-y-2">
      <div className="flex flex-col justify-between items-center h-40">
        <div className="relative w-20 h-20 overflow-hidden rounded-full">
          <Image
            src="/images/icons/profile.jpeg"
            alt="logo"
            layout="fill"
            objectFit="cover"
          />
        </div>

        <p className="ml-10 whitespace-pre-wrap text-sm">
          {`Why?에서 시작해 How를 찾는 과정을 좋아합니다. \n 그 고민과 성장의 과정을 꾸준히 기록하고자 합니다.`}
        </p>
      </div>

      <div className="w-2/4">
        <LinkButton
          name="github"
          icon="/images/icons/github.png"
          url="https://github.com/Gayun00"
        />
        <LinkButton
          name="careerly"
          icon="/images/icons/careerly.png"
          url="https://careerly.co.kr/profiles/634586?from=newsfeed&location=gnb"
          description="즐겨보는 아티클과 게시물을 확인할 수 있습니다."
        />
        {/* <LinkButton name="mail" /> */}
        <LinkButton
          name="velog"
          icon="/images/icons/velog.png"
          url="https://velog.io/@gygy"
          description="이전 블로그입니다."
        />
      </div>
    </section>
  );
}

export default Footer;
