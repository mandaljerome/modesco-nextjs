import About from "@/components/about/About";
import Blog from "@/components/blog/Blog";
import FeatureProducts from "@/components/feature-product/FeatureProducts";
import Hero from "@/components/hero/Hero";
import NewProducts from "@/components/new-products/NewProducts";
import Services from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";

export default function Home() {
    return (
        <div className="overflow-hidden">
            <header className="bg-main-blue py-10">
                <Hero />
            </header>
            <main>
                <FeatureProducts />
                <About />
                <Services />
                <NewProducts />
                <Testimonial />
                <Blog />
            </main>
        </div>
    );
}
