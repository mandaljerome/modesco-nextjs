import { Blog, FeatureProductsTypes, Products, Testimonial } from "@/types";
import yellowChair from "@/public/yellow-chair.png";
import furniStand from "@/public/furni-stand.png";
import sideTable from "@/public/side-table.png";
import grayChair from "@/public/gray-chair.png";
import tray from "@/public/tray.png";
import kitchenCabinet from "@/public/modern-kitchen-cabinet copy.png";
import blog1 from "@/public/first-time-blog.jpg";
import blog2 from "@/public/minimalist-blog.jpg";
import blog3 from "@/public/sale-blog.jpg";

export const featureProducts: FeatureProductsTypes[] = [
    {
        id: "1",
        name: "Stylized Chair",
        img: yellowChair,
        price: 50,
    },
    {
        id: "2",
        name: "Stylized Chair",
        img: furniStand,
        price: 50,
    },
    {
        id: "3",
        name: "Stylized Chair",
        img: sideTable,
        price: 50,
    },
];

export const newProducts: Products[] = [
    {
        id: "1",
        name: "Gray Nordic Chair",
        price: 20,
        img: grayChair,
        desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    },
    {
        id: "2",
        name: "Antique Tray",
        price: 20,
        img: tray,
        desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    },
    {
        id: "3",
        name: "Modern Kitchen Cabinet",
        price: 20,
        img: kitchenCabinet,
        desc: "Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio",
    },
];

export const blogs: Blog[] = [
    {
        id: "1",
        author: "Jerome Mandal",
        title: "First Time Home Owner Ideas",
        date: new Date("2024-02-01"),
        blog: "Embarking on the journey of first-time homeownership? Our blog is your trusted companion, offering a treasure trove of ideas tailored to your needs. Discover savvy budgeting tips, creative decor inspiration, and expert insights to turn your house into a home. Let us guide you through the exciting adventure of making your dream home a reality.",
        img: blog1,
    },
    {
        id: "2",
        author: "Jerome Mandal",
        title: "Minimalist Interior",
        date: new Date("2024-02-01"),
        blog: "Embarking on the journey of first-time homeownership? Our blog is your trusted companion, offering a treasure trove of ideas tailored to your needs. Discover savvy budgeting tips, creative decor inspiration, and expert insights to turn your house into a home. Let us guide you through the exciting adventure of making your dream home a reality.",
        img: blog2,
    },
    {
        id: "3",
        author: "Jerome Mandal",
        title: "Super duper sale!",
        date: new Date("2024-02-01"),
        blog: "Embarking on the journey of first-time homeownership? Our blog is your trusted companion, offering a treasure trove of ideas tailored to your needs. Discover savvy budgeting tips, creative decor inspiration, and expert insights to turn your house into a home. Let us guide you through the exciting adventure of making your dream home a reality.",
        img: blog3,
    },
];
