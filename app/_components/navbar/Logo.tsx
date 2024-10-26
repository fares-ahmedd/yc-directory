import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href={"/"}>
      <Image
        src="/logo.png"
        alt="logo"
        width={144}
        height={30}
        className="h-[30px] w-[144px]" // h-8 equals 32px
        priority
      />
    </Link>
  );
}

export default Logo;
