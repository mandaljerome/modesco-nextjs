import Image from "next/image";

import Container from "@/components/ui/Container";
import { Button } from "@/components/ui/button";

import heroImg from "@/public/hero-image.png";
import addsOn from "@/public/hero-addson.svg";

const Hero = () => {
    return (
        <Container className="lg:flex lg:items-center">
            <div className="flex flex-1 flex-col gap-6">
                <h1 className="text-4xl font-bold text-background md:text-5xl">
                    Modern Interior Design Studio
                </h1>
                <p className="text-sm text-background opacity-50 lg:w-9/12">
                    Exploring Trends, Techniques, and Inspirations for Crafting
                    Modern Interior Designs that Reflect Personal Style and
                    Enhance Living Environments.
                </p>
                <div className="space-x-4">
                    <Button size={"lg"}>Shop Now</Button>
                    <Button size={"lg"} variant={"outline"}>
                        Explore
                    </Button>
                </div>
            </div>
            <div className="relative basis-[60%]">
                <Image
                    src={heroImg}
                    alt="hero-image"
                    className="relative z-10 min-w-[600px]"
                    priority
                ></Image>
                <Image
                    src={addsOn}
                    alt="circles"
                    className="absolute right-[-100px] top-0 w-[50%] opacity-20"
                ></Image>
            </div>
        </Container>
    );
};
export default Hero;
