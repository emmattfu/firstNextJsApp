import react from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggler } from "@/components/navigation/navbar/Theme";
import MobileNavigation from "@/components/navigation/navbar/MobileNavigation";

const Navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full p-6 gap-5 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-5">
        <Image
          src="/images/site-logo.svg"
          alt="DevFlowLogo"
          width={23}
          height={23}
        />
        <p className="h2-bold font-space-grotesk text-dark-100 dark:text-light-900 max-sm:hidden">
          Dev <span className="text-primary-500">Flow</span>
        </p>
      </Link>

      <p>search</p>

      <div className="flex gap-5">
        <ThemeToggler />

        <MobileNavigation />
      </div>
    </nav>
  );
};

export default Navbar;
