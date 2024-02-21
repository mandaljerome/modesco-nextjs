import { StaticImageData } from "next/image";

export type Links = {
    title: string;
    href: string;
};

export interface FeatureProductsTypes {
    id: string;
    name: string;
    img: StaticImageData;
    price: number;
}

export interface Products {
    id: string;
    name: string;
    desc?: string;
    date?: Date;
    cost?: number;
    price: number;
    category?: string;
    img: StaticImageData;
}

export interface Testimonial {
    id: string;
    name: string;
    company?: string;
    date?: Date;
    testi: string;
    img: StaticImageData;
}

export interface Blog {
    id: string;
    title: string;
    date: Date;
    author: string;
    blog: string;
    img: StaticImageData;
}
