import Link from "next/link";
import Image from "next/image";

import NavDesktop from "./NavDesktop";
import NavMobile from "./NavMobile";

import logo from "@/public/logo-white.svg";

const links = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Shop",
    href: "/shop",
  },
  {
    title: "About",
    href: "/about",
  },
  {
    title: "Services",
    href: "/services",
  },
  {
    title: "Blog",
    href: "/blog",
  },
  {
    title: "Contact us",
    href: "/contact",
  },
];

const MainNavigation = () => {
  return (
    <nav>
      <div className="flex items-center justify-between">
        <Link href="/" className="w-fit">
          <Image src={logo} alt="Modesco Logo" priority></Image>
        </Link>

        {/* // Navigation for large screen */}
        <div className="hidden lg:block">
          <NavDesktop links={links} />
        </div>

        {/* // Menu for small screen */}
        <div className=" lg:hidden">
          <NavMobile />
        </div>
      </div>
      <div></div>
    </nav>
  );
};
export default MainNavigation;
