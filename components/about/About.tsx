import Image from "next/image";
import Container from "../ui/Container";

import homeFurni from "@/public/home-furni.jpg";
import addsOn from "@/public/dblue-addson.svg";
import addsOn2 from "@/public/addson2.svg";

import { MdLocalShipping } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { MdSupport } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const About = () => {
    return (
        <Container className="relative mt-28 flex flex-col gap-y-14 md:gap-x-24 lg:flex-row">
            <div className="relative lg:max-w-[480px]">
                <Image
                    src={homeFurni}
                    alt="home-furni"
                    className="h-[500px] rounded-3xl object-cover object-center"
                />
            </div>
            <div className="relative mx-auto max-w-[500px] md:max-w-full">
                <div>
                    <h2 className="text-3xl">Why Choose Us</h2>
                    <p className="mt-2 opacity-50">
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique.
                    </p>
                </div>
                <div className="mt-10 flex gap-6">
                    <div>
                        <MdLocalShipping
                            size={32}
                            className="h-[30px] text-main-darkblue"
                        />
                        <h3 className="mt-4 text-sm font-bold">
                            Fast & Free Shipping
                        </h3>
                        <p className="mt-2 text-sm opacity-50">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                    <div>
                        <FaBagShopping
                            size={26}
                            className="h-[30px] text-main-darkblue"
                        />
                        <h3 className="mt-4 text-sm font-bold">Easy to Shop</h3>
                        <p className="mt-2 text-sm opacity-50">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                </div>
                <div className="mt-6 flex gap-6">
                    <div>
                        <MdSupport
                            size={32}
                            className="h-[30px] text-main-darkblue"
                        />
                        <h3 className="mt-4 text-sm font-bold">24/7 Support</h3>
                        <p className="mt-2 text-sm opacity-50">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                    <div>
                        <TbTruckReturn
                            size={32}
                            className="h-[30px] text-main-darkblue"
                        />
                        <h3 className="mt-4 text-sm font-bold">
                            Hassle Free Returns
                        </h3>
                        <p className="mt-2 text-sm opacity-50">
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                </div>
            </div>
            <Image
                src={addsOn2}
                alt=""
                className="absolute -bottom-[300px] -right-52 -z-10 w-full max-w-[800px] opacity-20"
            />
        </Container>
    );
};
export default About;
