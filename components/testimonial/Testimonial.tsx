import Testimonials from "./Testimonials";
import { getTestimonials } from "@/lib/actions";

const Testimonial = async () => {
    let data = await getTestimonials();
    return <div>{data.length && <Testimonials data={data} />}</div>;
};
export default Testimonial;
