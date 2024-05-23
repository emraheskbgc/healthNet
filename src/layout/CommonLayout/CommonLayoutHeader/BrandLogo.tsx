import { ImagePath } from "../../../utils/constant";
import Image from "next/image";
import Link from "next/link";

const BrandLogo = ({ differentLogo }: { differentLogo?: string }) => {
  return (
    <div className="brand-logo">
      <Link href="/newsfeed/style6">
        <Image
          width={40}
          height={10}
          src="/assets/images/logo.png"
          alt="logo"
          className="img-fluid blur-up lazyloaded"
        />
      </Link>
    </div>
  );
};

export default BrandLogo;
