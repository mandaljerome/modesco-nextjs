import connect from "@/mongodb/mongoconn";
import TestimonialsModel from "@/mongodb/TestimonialsModel";

export const GET = async () => {
    try {
        connect();
        const data = await TestimonialsModel.find();
        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        return new Response("Error fetching the data", { status: 500 });
    }
};

export const POST = async (req: Request) => {
    try {
        const newDocument = await req.json();
        connect();

        await TestimonialsModel.insertMany([newDocument]);
        return new Response(JSON.stringify(newDocument), {
            headers: {
                "Content-Type": "application/json",
            },
            status: 201,
        });
    } catch (error) {
        return new Response("Error posting the data", { status: 500 });
    }
};
