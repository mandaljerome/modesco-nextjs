import Image from "next/image";
import Link from "next/link";

import logo from "@/public/logo-white.svg";
import { Button } from "@/components/ui/button";

const page = () => {
    return (
        <div className="relative flex h-screen min-h-[667px] w-full items-center justify-center bg-main-darkblue px-4 md:px-0">
            <div className="flex w-full max-w-[350px] flex-col items-center gap-12">
                <div className="flex w-full flex-col items-center gap-6">
                    <Image
                        className="w-full max-w-[250px]"
                        src={logo}
                        alt="logo"
                        priority
                    />
                    <p className="text-xs text-white">
                        Sales and Inventory Management System
                    </p>
                </div>

                <h3 className="text-xl text-white">Welcome Back!</h3>
                <form
                    action=""
                    className="flex w-full flex-col items-center gap-3"
                >
                    <div className="flex w-full flex-col gap-2">
                        <label
                            htmlFor="username"
                            className="text-xs text-main-lightblue"
                        >
                            Username
                        </label>
                        <input
                            className="rounded-md bg-[#556884] p-3 text-main-lightblue focus:border-none
                            focus:outline-0 focus:outline-main-lightblue active:border-none active:outline-none"
                            type="text"
                            id="username"
                            name="username"
                        />
                    </div>
                    <div className="flex w-full flex-col gap-2">
                        <label
                            className="text-xs text-main-lightblue"
                            htmlFor="password"
                        >
                            Password
                        </label>
                        <input
                            className="rounded-md bg-[#556884] p-3 text-main-lightblue focus:border-none
                            focus:outline-0 focus:outline-main-lightblue active:border-none active:outline-none"
                            type="password"
                            id="password"
                            name="password"
                        />
                    </div>
                    <Button className="mt-8 w-full bg-main-blue py-6">
                        Sign In
                    </Button>
                    <Link
                        href="/"
                        className="mt-8 block text-xs text-main-lightblue opacity-40"
                    >
                        Forgot Password?
                    </Link>
                </form>
            </div>
            <div className="absolute bottom-6 flex gap-4">
                <Link
                    href="/"
                    className="block text-xs text-main-lightblue opacity-20"
                >
                    Terms of Use
                </Link>
                <span className="block text-xs text-main-lightblue opacity-20">
                    |
                </span>
                <Link
                    href="/"
                    className="block text-xs text-main-lightblue opacity-20"
                >
                    Privacy Policy
                </Link>
            </div>
        </div>
    );
};

export default page;
