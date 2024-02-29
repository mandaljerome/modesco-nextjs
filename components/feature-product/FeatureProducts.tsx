import Image from "next/image";

import Container from "../ui/Container";
import { Button } from "../ui/button";

import { featureProducts } from "@/constants.ts";

import FeatureProduct from "./FeatureProduct";

const FeatureProducts = () => {
    return (
        <Container className="mt-28 flex flex-col gap-y-8 md:gap-x-4 lg:flex-row">
            <div className="space-y-4 lg:max-w-[350px]">
                <h1 className="text-3xl">Crafted with excellent material.</h1>
                <p className="opacity-50">
                    Our products stand as a testament to quality craftsmanship,
                    offering enduring elegance and superior performance for your
                    space's aesthetic and functional needs.
                </p>
                <Button size={"lg"}>Explore</Button>
            </div>
            <div className="w-full gap-x-4 md:flex">
                {featureProducts.map((product) => {
                    return (
                        <FeatureProduct
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                        />
                    );
                })}
            </div>
        </Container>
    );
};
export default FeatureProducts;
