import AllProducts from "@/ui/components/all-products/AllProducts";
import Badge from "@/ui/components/badge/Badge";
import BestSelling from "@/ui/components/best-selling/BestSelling";
import CampaignProducts from "@/ui/components/campaign-products/CampaignProducts";
import ExclusiveCategory from "@/ui/components/exclusive-category/ExclusiveCategory";
import FeatureCategory from "@/ui/components/feature-category/FeatureCategory";
import Hero from "@/ui/components/hero/Hero";
import OnGoing from "@/ui/components/on-going/OnGoing";
import TrendingProducts from "@/ui/components/trending-products/TrendingProducts";

export default function Home() {
  return (
  <div>
    <Hero/>
    <Badge/>
    <FeatureCategory/>
    <ExclusiveCategory/>
    <TrendingProducts/>
    <OnGoing/>
    <BestSelling/>
    <CampaignProducts/>
    <AllProducts/>
  </div>
  );
}
