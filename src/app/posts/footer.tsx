import React from "react";
import LinkButton from "../components/LinkButton";
import Image from "next/image";
import { CiMail } from "react-icons/ci";

function Footer() {
  return (
    <section className="mt-40 mb-20 p-10 flex flex-col items-center justify-between w-4/5 border-y-2">
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

      <div className="mt-10 flex justify-between w-2/4">
        <div>
          <LinkButton url="https://github.com/Gayun00">
            <LinkButton.Icon image="/images/icons/github.png" />
            <LinkButton.Name name="github" />
          </LinkButton>

          <LinkButton url="https://careerly.co.kr/profiles/634586?from=newsfeed&location=gnb">
            <LinkButton.Icon image="/images/icons/careerly.png" />
            <LinkButton.Name name="careerly" />
          </LinkButton>
        </div>

        <div>
          <LinkButton url="https://velog.io/@gygy">
            <LinkButton.Icon image="/images/icons/velog.png" />
            <LinkButton.Name name="velog" />
          </LinkButton>

          <LinkButton url="/mail">
            <LinkButton.Icon Icon={<CiMail />} />
            <LinkButton.Name name="mail" />
          </LinkButton>
        </div>
      </div>
    </section>
  );
}

export default Footer;
