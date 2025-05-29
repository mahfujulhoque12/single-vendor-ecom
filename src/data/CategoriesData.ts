import { StaticImageData } from "next/image";

import img2 from "/public/category/food2.png";
import img3 from "/public/category/food3.png";
import img4 from "/public/category/food2.png";

interface Items {
  id: number;
  img: StaticImageData | string;
  title: string;
  rating: number;
  reviews: number;
  sold: number;
  total: number;
  originalPrice: number;
  discountedPrice: number;
  type: string;
  description: string;
  ratingPoint: number;
  category: string;
  brand: string;
  features: string;
  condition: string;
  
}

export const items: Items[] = [
  {
    id: 1,
    img: img2,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 4.5,
    reviews: 120,
    sold: 55,
    total: 80,
    originalPrice: 100.5,
    discountedPrice: 8000.19,
    type: "Electronics",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Mobile accessory",
    brand: "Apple",
    features: "Large Memory",
    condition: "Brand new",
  },
  {
    id: 2,
    img: img4,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 3.5,
    reviews: 92,
    sold: 45,
    total: 9000,
    originalPrice: 120.21,
    discountedPrice: 9105.99,
    type: "Electronics",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Electronics",
    brand: "Samsung",
    features: "Large Memory",
    condition: "Old items",
  },
  {
    id: 3,
    img: img2,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 4.2,
    reviews: 92,
    sold: 45,
    total: 1520,
    originalPrice: 120.12,
    discountedPrice: 9105.22,
    type: "Fasion",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Smartphones",
    brand: "Apple",
    features: "Large Memory",
    condition: "Refurbished",
  },
  {
    id: 4,
    img: img3,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 2,
    reviews: 92,
    sold: 45,
    total: 90,
    originalPrice: 120.35,
    discountedPrice: 9105.2,
    type: "Living",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Modern tech",
    brand: "Apple",
    features: "Large Memory",
    condition: "Refurbished",
  },
  {
    id: 5,
    img: img2,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 4.2,
    reviews: 92,
    sold: 45,
    total: 90,
    originalPrice: 120.21,
    discountedPrice: 9845.22,
    type: "Soprts",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Home & Garden",
    brand: "Apple",
    features: "SSD",
    condition: "Old items",
  },
  {
    id: 6,
    img: img3,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 5,
    reviews: 92,
    sold: 45,
    total: 90,
    originalPrice: 120.1,
    discountedPrice: 9845.2,
    type: "Digital",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Watches",
    brand: "Apple",
    features: "Metallic",
    condition: "Brand new",
  },
  {
    id: 7,
    img: img3,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 2,
    reviews: 92,
    sold: 45,
    total: 90,
    originalPrice: 120.35,
    discountedPrice: 95.2,
    type: "usb",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Clothing",
    brand: "Adidas",
    features: "Plastic cover",
    condition: "Brand new",
  },
  {
    id: 8,
    img: img2,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 4.2,
    reviews: 92,
    sold: 45,
    total: 90,
    originalPrice: 120.21,
    discountedPrice: 95.22,
    type: "headphone",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Mobile accessory",
    brand: "Nike",
    features: "8GB Ram",
    condition: "Brand new",
  },

  {
    id: 9,
    img: img3,
    title: "BH Plush Fabric Lounge Chair for office",
    rating: 5,
    reviews: 92,
    sold: 45,
    total: 940,
    originalPrice: 120.1,
    discountedPrice: 95.2,
    type: "mobile",
    description: "lorem is idr dd dff ff fgag ddt df ferf",
    ratingPoint: 5,
    category: "Electronics",
    brand: "Dell",
    features: "Super power",
    condition: "Brand new",
  },
];
