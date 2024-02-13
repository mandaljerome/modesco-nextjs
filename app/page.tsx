import About from "@/components/about/About";
import FeatureProducts from "@/components/feature-product/FeatureProducts";
import Hero from "@/components/hero/Hero";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <header className="bg-main-blue py-10">
        <Hero />
      </header>
      <main>
        <FeatureProducts />
        <About />
      </main>
    </div>
  );
}
