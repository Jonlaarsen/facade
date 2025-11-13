import BoardSection from "@/components/boards/BoardSection";
import DiscountSection from "@/components/discount/DiscountSection";
import HeroSection from "@/components/hero/HeroSection";
import HeroTwoSection from "@/components/hero/HeroTwoSection";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <BoardSection />
      <HeroTwoSection />
      <DiscountSection />
      <Footer />
    </div>
  );
}
