import Image from "next/image";
import Link from "next/link";
import Footer from "./footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex flex-col items-center">
      <header className="flex justify-center items-center w-full max-w-5xl h-10">
        <Link href="/posts">
          <Image src="/images/logo.svg" alt="logo" width={80} height={30} />
        </Link>
      </header>
      {children}
      <Footer />
    </div>
  );
}
