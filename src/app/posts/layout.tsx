import Image from "next/image";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-2 flex flex-col items-center">
      <header className="flex justify-between items-center w-full max-w-5xl h-40">
        <Image src="/images/logo.svg" alt="logo" width={80} height={30} />
        <p>Blog</p>
      </header>
      {children}
    </div>
  );
}
