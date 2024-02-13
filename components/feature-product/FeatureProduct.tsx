"use client";

import Image from "next/image";

import { FeatureProductsTypes } from "@/types";

import { motion } from "framer-motion";

import { FaCirclePlus } from "react-icons/fa6";

const FeatureProduct = ({ id, name, price, img }: FeatureProductsTypes) => {
    const parentVariants = {
        hv: { y: 0 },
    };
    const imageVariants = {
        hv: { y: -20 },
    };
    const bgVariants = {
        hv: {
            height: "70%",
            transition: {
                duration: 0.3,
            },
        },
    };
    const iconVariant = {
        hv: {
            display: "flex",
            bottom: -17,
            opacity: 1,
            transition: {
                duration: 0.3,
            },
        },
    };

    return (
        <motion.div
            className="relative flex w-full flex-col items-center justify-center gap-y-2 pb-8"
            variants={parentVariants}
            whileHover="hv"
        >
            <motion.div
                className="flex h-[300px] items-center"
                variants={imageVariants}
            >
                <Image
                    src={img}
                    alt={name}
                    className="max-w-[280px] md:max-w-[230px]"
                ></Image>
            </motion.div>
            <h1 className="font-bold">Stylized Chair</h1>
            <p className="font-extrabold">${price}.00</p>
            <motion.div
                className="absolute bottom-4 right-1/2 hidden translate-x-1/2 opacity-0"
                variants={iconVariant}
            >
                <FaCirclePlus className="text-main-blue" size={34} />
            </motion.div>

            <motion.div
                className="absolute bottom-0 z-[-2] w-full origin-bottom rounded-xl bg-main-blue opacity-10"
                variants={bgVariants}
            ></motion.div>
        </motion.div>
    );
};

export default FeatureProduct;
