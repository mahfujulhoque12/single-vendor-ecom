import { trendingProducts } from "@/data/trendingProducts";
import TrendingDetails from "@/ui/components/trending-products/atom/TrendingDetails";

import { FC } from "react";

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  return trendingProducts.map((card) => ({
    slug: card.slug,
  }));
}

const Page: FC<PageProps> = ({ params }) => {
  const allInfo = trendingProducts.find((card) => card.slug === params.slug);

  if (!allInfo) return <div>Page not found</div>;

  return <TrendingDetails allInfo={allInfo} />;
};

export default Page;
