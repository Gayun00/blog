import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 flex flex-col items-center">
      <header className="flex justify-between items-center w-full max-w-5xl h-40">
        <Image src="/images/logo.svg" alt="logo" width={80} height={30} />
        <p>Blog</p>
      </header>
      <section className="flex items-center h-40">
        <Image src="/images/logo.svg" alt="logo" width={80} height={30} />
        <p className="ml-10 whitespace-pre-wrap">
          {`Why?에서 시작해 How를 찾는 과정을 좋아합니다. \n 그 고민과 성장의 과정을 꾸준히 기록하고자 합니다.`}
        </p>
      </section>
      {children}
    </div>
  );
}
