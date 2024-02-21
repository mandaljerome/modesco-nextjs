import Image from "next/image";
import Container from "../ui/Container";

import { newProducts } from "@/constants.ts";
import Link from "next/link";

const NewProducts = () => {
    return (
        <Container className="mt-20 flex flex-col gap-6 md:flex-row">
            {newProducts.map((product) => (
                <div key={product.id} className="mt-8 flex gap-6">
                    <div className="relative flex h-[100px] w-full max-w-[100px] items-center justify-center">
                        <Image src={product.img} alt={product.name} />
                        <div className="absolute -right-3 -top-5 -z-10 h-[100px] w-[100px] rounded-full bg-main-blue"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                        <h3 className="text-sm font-bold">{product.name}</h3>
                        <p className="text-sm opacity-50">{product.desc}</p>
                        <Link href="/" className="text-sm text-main-darkblue">
                            <p>Read More</p>
                        </Link>
                    </div>
                </div>
            ))}
        </Container>
    );
};

export default NewProducts;
