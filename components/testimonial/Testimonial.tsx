"use client";

import React from "react";
import Container from "../ui/Container";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    type CarouselApi,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

import Image from "next/image";

import { testimonials } from "@/constants.ts";

const Testimonial = () => {
    const [api, setApi] = React.useState<CarouselApi>();
    const [current, setCurrent] = React.useState(0);
    const [count, setCount] = React.useState(0);

    const plugin = React.useRef(
        Autoplay({ delay: 5000, stopOnInteraction: true }),
    );

    React.useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <Container>
            <h2 className="mt-36 text-center text-3xl">Testimonials</h2>
            <div className="px-10">
                <Carousel
                    setApi={setApi}
                    plugins={[plugin.current]}
                    className="mt-14 w-full"
                    onMouseEnter={plugin.current.stop}
                    onMouseLeave={plugin.current.play}
                >
                    <CarouselContent className="w-full">
                        {testimonials.map((testimonial) => (
                            <CarouselItem key={testimonial.id}>
                                <div className="flex flex-col items-center justify-center gap-4">
                                    <p className="max-w-screen-lg text-center text-xl opacity-50">
                                        {testimonial.testi}
                                    </p>
                                    <div className="mt-6 flex flex-col items-center justify-center gap-2">
                                        <Image
                                            src={testimonial.img}
                                            alt={testimonial.name}
                                        />
                                        <div>
                                            <h3 className="text-center text-sm font-bold">
                                                {testimonial.name}
                                            </h3>
                                            <p className="text-center text-sm opacity-50">
                                                {testimonial.company}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="hover:bg-main-blue hover:text-white" />
                    <CarouselNext className="hover:bg-main-blue hover:text-white" />
                </Carousel>
            </div>
        </Container>
    );
};
export default Testimonial;
