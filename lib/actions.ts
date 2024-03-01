import { revalidatePath } from "next/cache";
import { redirect } from "next/dist/server/api-utils";

export const getTestimonials = async () => {
    const data = await fetch("http://localhost:3000/api/testimonials");
    const res = await data.json();
    return res;
};

export const postTestimonials = async () => {};
