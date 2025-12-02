import CategorySection from "@/components/CategorySection/CategorySection";
import MainBanner from "@/components/MainBanner/MainBanner";
import ProductBanner from "@/components/ProductBanner/ProductBanner";

const Home = () => {
  return (
    <section>
      <MainBanner />
      <ProductBanner />
      <CategorySection />
    </section>
  );
};
export default Home;
