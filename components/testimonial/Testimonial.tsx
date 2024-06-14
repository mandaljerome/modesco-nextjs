import Testimonials from "./Testimonials";
import { getTestimonials } from "@/lib/actions";

const Testimonial = async () => {
    // let data = await getTestimonials();

    const data = [
        {
            id: "1",
            name: "Mariel Rodriguez",
            company: "Westfield Homeowner",
            testi: "Exceptional quality and service! Our experience with Odesco was fantastic. From stylish designs to impeccable craftsmanship, they exceeded our expectations. Highly recommend for anyone looking for top-notch furniture.",
            img: "https://odesco.s3.ap-southeast-1.amazonaws.com/web-img/testi1.png",
        },

        {
            id: "2",
            name: "Jason Stumphf",
            company: "Exabytes Tech",
            testi: "Outstanding product! The quality exceeded my expectations. It's reliable, durable, and exactly what I needed. Highly recommended for anyone seeking top-notch performance.",
            img: "https://odesco.s3.ap-southeast-1.amazonaws.com/web-img/testi2.png",
        },

        {
            id: "3",
            name: "Daniela Stewart",
            company: "Visuals Inc.",
            testi: "Absolutely impressed! This product surpasses all others. Its functionality, design, and reliability are unmatched. A must-have for anyone looking for excellence in their purchase.",
            img: "https://odesco.s3.ap-southeast-1.amazonaws.com/web-img/testi3.png",
        },
    ];
    return <div>{data.length && <Testimonials data={data} />}</div>;
};
export default Testimonial;
