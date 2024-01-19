import Link from "next/link";
import Image from "next/image";

const Logo = () => {
  return (
    <Link href="/" className="flex justify-center items-center">
      <Image
        src="/images/logos/dark-logo.svg"
        alt="logo"
        height={70}
        width={174}
        priority
      />
    </Link>
  );
};

export default Logo;
