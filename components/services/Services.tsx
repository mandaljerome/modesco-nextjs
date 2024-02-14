import Image from "next/image";
import Container from "../ui/Container";

import image1 from "@/public/image1.jpg";
import image2 from "@/public/image2.jpg";
import image3 from "@/public/image3.jpg";
import addsOn from "@/public/addson2.svg";

import { GiCheckMark } from "react-icons/gi";

const Services = () => {
    return (
        <Container className="md:gap-30 relative mt-28 flex flex-col-reverse gap-20 md:flex-row">
            <div className="md:pt-24">
                <h1 className="text-2xl">
                    We Help You Make Modern Interior Design
                </h1>
                <p className="mt-2 text-sm opacity-50">
                    Donec facilisis quam ut purus rutrum lobortis. Donec vitae
                    odio quis nisl dapibus malesuada. Nullam ac aliquet velit.
                    Aliquam vulputate velit imperdiet dolor tempor tristique.
                    Pellentesque habitant morbi tristique senectus et netus et
                    malesuada
                </p>
                <div className="mt-6 space-y-6 opacity-50">
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                            <GiCheckMark size={18} />
                            <p className="text-sm">
                                Donec vitae odio quis nisl dapibus malesuada
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiCheckMark size={18} />
                            <p className="text-sm">
                                Donec vitae odio quis nisl dapibus malesuada
                            </p>
                        </div>
                    </div>
                    <div className="flex gap-3">
                        <div className="flex items-center gap-2">
                            <GiCheckMark size={18} />
                            <p className="text-sm">
                                Donec vitae odio quis nisl dapibus malesuada
                            </p>
                        </div>
                        <div className="flex items-center gap-2">
                            <GiCheckMark size={18} />
                            <p className="text-sm">
                                Donec vitae odio quis nisl dapibus malesuada
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid max-w-[550px] grid-cols-12 grid-rows-12 gap-4">
                <div className="col-span-8 col-start-1 row-start-1 row-end-13 overflow-hidden rounded-3xl">
                    <Image src={image1} alt="" />
                </div>
                <div className="col-start-7 col-end-13 row-start-6 row-end-13 overflow-hidden rounded-3xl">
                    <Image src={image2} alt="" />
                </div>
                <div className="col-start-9 col-end-13 row-span-4 row-start-2 overflow-hidden rounded-3xl">
                    <Image
                        src={image3}
                        alt=""
                        className="h-full object-cover"
                    />
                </div>
            </div>
            <Image
                src={addsOn}
                alt=""
                className="absolute -bottom-0 -left-20 -z-10 w-full max-w-[1000px] opacity-20 md:-bottom-[300px]"
            />
        </Container>
    );
};
export default Services;
