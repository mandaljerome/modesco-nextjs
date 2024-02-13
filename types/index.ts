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
