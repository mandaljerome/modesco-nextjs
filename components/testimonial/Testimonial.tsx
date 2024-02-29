import { revalidatePath } from "next/cache";
import Testimonials from "./Testimonials";
import { getTestimonials } from "@/lib/actions";

const Testimonial = async () => {
    const data = await getTestimonials();

    return (
        <div>
            <Testimonials data={data} />
        </div>
    );
};
export default Testimonial;
