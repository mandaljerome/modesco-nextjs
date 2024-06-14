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
        href: "#",
    },
    {
        title: "About",
        href: "#",
    },
    {
        title: "Services",
        href: "#",
    },
    {
        title: "Blog",
        href: "#",
    },
    {
        title: "Contact us",
        href: "#",
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
