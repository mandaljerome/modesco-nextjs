import Link from "next/link";

import Container from "../ui/Container";

import { blogs } from "@/constants.ts";
import Image from "next/image";

const Blog = () => {
    return (
        <Container className="mt-20">
            <div className="flex items-center justify-between">
                <h3 className="text-3xl">Recent Blog</h3>
                <Link href="/" className="underline opacity-50">
                    View All Posts
                </Link>
            </div>
            <div className="mt-2 sm:flex sm:gap-10">
                {blogs.map((blog) => {
                    const date = blog.date;
                    const options: Intl.DateTimeFormatOptions = {
                        weekday: "long",
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    };
                    const dateString: string = date.toLocaleDateString(
                        "en-US",
                        options,
                    );

                    return (
                        <div className="mt-10 sm:mt-5">
                            <Image
                                src={blog.img}
                                alt={blog.title}
                                className="h-[300px] w-[400px] rounded-xl object-cover"
                            />
                            <div className="mt-4">
                                <h3 className="text-2xl">{blog.title}</h3>
                                <p className="text-sm text-gray-500 opacity-100">
                                    by{" "}
                                    <span className="font-semibold text-black">
                                        {blog.author}
                                    </span>{" "}
                                    on{" "}
                                    <span className="font-semibold text-black">
                                        {dateString}
                                    </span>
                                </p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Container>
    );
};
export default Blog;
