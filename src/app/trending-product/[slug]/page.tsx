import { trendingProducts } from "@/data/trendingProducts";
import TrendingDetails from "@/ui/components/trending-products/atom/TrendingDetails";
import { Metadata } from "next";
import { StaticImageData } from "next/image";
import { notFound } from "next/navigation";

export interface TrendingDetailsProps {
  id: number;
  title: string;
  img: StaticImageData;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  originalPrice: number;
  discountedPrice: number;
  description: string;
  slug: string;
  category: string;
  serialNumber: string;
  imgs?: StaticImageData[];
}

// Fix: Define params as a Promise for generateMetadata
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>; // Updated to Promise
}): Promise<Metadata> {
  const { slug } = await params; // Unwrap the Promise to get the slug
  const product = trendingProducts.find((card) => card.slug === slug);
  if (!product) return { title: "Product Not Found" };

  return {
    title: product.title,
    description: product.description,
  };
}

export async function generateStaticParams() {
  return trendingProducts.map((card) => ({
    slug: card.slug,
  }));
}

import { type NextPage } from 'next';

type PageProps = {
  params: Promise<{ slug: string }>;
};

const Page: NextPage<PageProps> = async ({ params }) => {
  const { slug } = await params;
  const allInfo = trendingProducts.find((card) => card.slug === slug);
  if (!allInfo) return notFound();

  return <TrendingDetails allInfo={allInfo} />;
};

export default Page;