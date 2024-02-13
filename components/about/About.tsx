import Image from "next/image";
import Container from "../ui/Container";

import homeFurni from "@/public/home-furni.jpg";

import { MdLocalShipping } from "react-icons/md";
import { FaBagShopping } from "react-icons/fa6";
import { MdSupport } from "react-icons/md";
import { TbTruckReturn } from "react-icons/tb";

const About = () => {
    return (
        <Container>
            <div>
                <Image src={homeFurni} alt="home-furni" className="" />
            </div>
            <div>
                <div>
                    <h2>Why Choose Us</h2>
                    <p>
                        Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                        aliquet velit. Aliquam vulputate velit imperdiet dolor
                        tempor tristique.
                    </p>
                </div>
                <div>
                    <div>
                        <MdLocalShipping />
                        <h3>Fast & Free Shipping</h3>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                    <div>
                        <FaBagShopping />
                        <h3>Easy to Shop</h3>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <MdSupport />
                        <h3>24/7 Support</h3>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                    <div>
                        <TbTruckReturn />
                        <h3>Hassle Free Returns</h3>
                        <p>
                            Donec vitae odio quis nisl dapibus malesuada. Nullam
                            ac aliquet velit. Aliquam vulputate.
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    );
};
export default About;
