import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

import { BsEnvelopeCheck } from "react-icons/bs";
import { FaPaperPlane, FaFacebookSquare, FaLinkedinIn } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

import bed from "@/public/bed-footer.png";
import logo from "@/public/logo-black.svg";

const Footer = () => {
    return (
        <div className="mt-14 overflow-hidden pt-40">
            <div className="bg-main-lightblue">
                <Container className="relative py-14 md:py-8">
                    <div className="absolute -right-[180px] -top-[150px] max-w-[500px]">
                        <Image src={bed} alt="" />
                    </div>
                    <form
                        action=""
                        className="mt-8 space-y-6 md:mt-0 md:max-w-[800px]"
                    >
                        <div className="flex items-center gap-2">
                            <BsEnvelopeCheck
                                size={23}
                                className="text-main-darkblue"
                            />
                            <h3 className="text-xl text-main-darkblue">
                                Subscribe to Newsletter
                            </h3>
                        </div>
                        <div className="flex flex-col gap-3 md:flex-row">
                            <div className="flex w-full gap-3">
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your name"
                                    className="w-full rounded-md p-3 text-main-darkblue focus:border-main-darkblue focus:outline-main-darkblue"
                                />
                                <input
                                    type="text"
                                    name=""
                                    id=""
                                    placeholder="Enter your email"
                                    className="w-full rounded-md p-3 text-main-darkblue focus:border-main-darkblue focus:outline-main-darkblue"
                                />
                            </div>
                            <button
                                type="submit"
                                className="flex w-[70px] items-center justify-center rounded-lg bg-main-darkblue py-3 text-white"
                            >
                                <FaPaperPlane />
                            </button>
                        </div>
                    </form>
                    <div className="mt-10 md:flex md:justify-between">
                        <div className="space-y-6 md:max-w-[500px]">
                            <Image
                                src={logo}
                                alt="logo"
                                className="w-full max-w-[200px]"
                            />
                            <p className="text-sm opacity-50">
                                Donec facilisis quam ut purus rutrum lobortis.
                                Donec vitae odio quis nisl dapibus malesuada.
                                Nullam ac aliquet velit. Aliquam vulputate velit
                                imperdiet dolor tempor tristique. Pellentesque
                                habitant
                            </p>
                            <div className="flex gap-2">
                                <div className="rounded-full bg-main-darkblue p-2">
                                    <FaFacebookSquare color="white" />
                                </div>
                                <div className="rounded-full bg-main-darkblue p-2">
                                    <RiInstagramFill color="white" />
                                </div>
                                <div className="rounded-full bg-main-darkblue p-2">
                                    <FaLinkedinIn color="white" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-10 flex gap-14 md:mt-0">
                            <div className="space-y-2">
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    About us
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Services
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Blog
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Contact us
                                </Link>
                            </div>
                            <div className="space-y-2">
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Support
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Jobs
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Out team
                                </Link>
                                <Link
                                    href="/"
                                    className="block text-sm opacity-50"
                                >
                                    Privacy Policy
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="mt-14 flex flex-col gap-4 md:flex-row md:justify-between">
                        <p className="text-center text-sm opacity-50">
                            Copyright ©2024. All Rights Reserved. — Designed
                            with love by Jerome Mandal
                        </p>
                        <div className="space-x-2 text-center text-sm opacity-50">
                            <Link href="/">Terms & Condition</Link>
                            <Link href="/">Privacy Policy</Link>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
};
export default Footer;
