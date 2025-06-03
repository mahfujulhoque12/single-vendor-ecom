"use client";
import { allOrderStatus,  orders } from "@/data/orders";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import Image from "next/image";
import Link from "next/link";
import React, { Suspense, useEffect, useState } from "react";
import { FaChevronDown, FaFilter } from "react-icons/fa";
import { MdArrowBackIos } from "react-icons/md";
import { useSearchParams } from 'next/navigation';


const Ongoing = () => {
  const [activeProductId, setActiveProductId] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const statusFromURL = searchParams.get("status");

  useEffect(() => {
  if (statusFromURL && allStatus.includes((statusFromURL).toUpperCase())) {
    setSelectedFilter((statusFromURL).toUpperCase());
  }
}, [statusFromURL]);

  const toggleDescription = (id: string) => {
    setActiveProductId((prev) => (prev === id ? null : id));
    console.log("✅ Toggled Description for ID:", id);
  };
    const [open, setOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All Orders");

  const toggleDropdown = () => setOpen((prev) => !prev);


  const allStatus = ["All Orders", ...allOrderStatus];

  const handleSelect = (filter: string) => {
    setSelectedFilter(filter);
    setOpen(false);

  };

  const filteredOrders = selectedFilter === "All Orders"
  ? orders
  : orders.filter(order => order.order_status.toLowerCase() === selectedFilter.toLowerCase());



  return (
    <MaxWidthWrapper className="mb-30 sm:mb-0">
      <Link
        href="/account"
        className="flex gap-1 items-center px-3 py-2 rounded-md w-fit mt-2 text-green-500 text-base font-semibold"
      >
        <MdArrowBackIos size={18} /> <span>Return</span>
      </Link>

      {/* for filter status start */}

     <div className="flex justify-between items-center relative">
      <h1 className="text-gray-800 text-2xl font-semibold">My Orders</h1>

      <div className="relative">
        <button
          onClick={toggleDropdown}
          className="text-base font-medium text-gray-500 flex items-center gap-1"
        >
          {selectedFilter} <FaFilter size={15} className="text-green-500" />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-md z-50">
            <ul className="text-sm text-gray-700">
              {allStatus.map((filter) => (
                <li
                  key={filter}
                  onClick={() => handleSelect(filter)}
                  className={`px-4 py-2 cursor-pointer hover:bg-gray-100 ${
                    selectedFilter === filter ? "bg-green-100 font-semibold text-green-700" : ""
                  }`}
                >
                  {filter}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

      {/* for filter status end */}





      {filteredOrders.map((order) => {
  

        return (
          <div
            key={order.order_id}
            className="relative bg-white rounded-md p-4 mt-4 border border-gray-200  "
          >
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">
              <div>
                <h2 className="text-gray-800 text-base font-semibold uppercase">
                 {order.order_number}
                </h2>
                <p className="text-sm font-medium text-gray-700">
                  Order Date: {order.order_date}
                </p>
                <p className="text-sm font-medium text-gray-700">
                  Status: {order.order_status}
                </p>
              </div>

                <button
                role="button"
                aria-expanded={activeProductId === order.order_id}
                onClick={() => toggleDescription(order.order_id)}
                className="absolute text-green-600 text-sm font-semibold px-4 py-2 self-start sm:self-center right-0 top-0 cursor-pointer"
                >
                <FaChevronDown
                  size={16}
                  className={`transition-transform duration-200 ${
                  activeProductId === order.order_id ? "rotate-180" : ""
                  }`}
                />
                </button>
            </div>

            {activeProductId === order.order_id && (
              <div className="  pt-3 text-sm text-gray-700">
                <h2 className="text-lg font-semibold text-gray-900">
                  Ship To :{" "}
                </h2>
                <p className="text-base font-semibold text-gray-500">
                  {order.shipping_address.name}
                </p>
                <p className=" text-sm font-semibold text-gray-500">
                  {order.shipping_address.address_line_1}
                </p>
                <p className=" text-sm font-semibold text-gray-500">
                  Phone: {order.shipping_address.phone}
                </p>
                <p className=" text-sm font-semibold text-gray-500">
                  Email: {order.shipping_address.email}
                </p>

             

               

                {/* product price start */}
                <div className="mt-3">
                  <h2 className="text-lg font-semibold text-gray-700 ">
                    Order Total :{" "}
                  </h2>
                  {order.order_items.map((item)=>(

                  <div key={item.product_id} className="flex items-center justify-between gap-2">
                    <h3 className="text-sm font-semibold text-gray-500">
                      {item.product_name}
                    </h3>
               

                    <p className="text-sm font-semibold text-gray-700">
                      {item.quantity} × {item.price} = ${item.quantity * item.price}
                    </p>
                  </div>
                  ))}
                
                 
                </div>
                {/* product price end */}

                {/* subtotal */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-700 mt-3">
                    Subtotal :{" "}
                  </h2>
                  <p className="text-sm font-semibold text-gray-700">${order.subtotal}</p>
                </div>

                {/* coupon applied */}

                <h2 className="text-lg font-semibold text-gray-700 mt-3">
                  Coupon Applied :{" "}
                </h2>
                {order.coupons_applied.map((coupon)=>(


                <div key={coupon.coupon_code} className="flex justify-between items-center gap-2 mt-1">
                  <p className="text-xs font-medium px-2 py-1 rounded-md text-white bg-green-500">
                    {coupon.coupon_code}
                  </p>
                  <p className="text-sm font-semibold text-gray-700">- ${coupon.discount_value}</p>
                </div>
                ))}

                {order.coupons_applied.length === 0 && (
                  <p className="text-sm font-semibold text-gray-500">No coupons applied</p>
                )}
               

                {/* shipping charge */}
                  <div className="flex justify-between items-center border-b border-b-gray-300 pb-3">
                  <h2 className="text-lg font-semibold text-gray-700 mt-3">
                    Shipping Charge :{" "}
                  </h2>
                  <p className="text-sm font-semibold text-gray-700">${order.shipping_cost}</p>
                </div>

                {/* total */}
                <div className="flex justify-between items-center">
                  <h2 className="text-lg font-semibold text-gray-700 mt-3">
                    Total :{" "}
                  </h2>
                  <p className=" text-sm font-semibold text-gray-700">${order.total_amount}</p>
                </div>

                   {/* payment method */}
                <h2 className="text-lg font-semibold text-gray-700 mt-3">
                  Payment Mehod :{" "}
                </h2>
                <p className=" text-sm font-semibold text-gray-500">{order.payment_method}</p>

                {/* payment status */}
                <h2 className="text-lg font-semibold text-gray-700 mt-3">
                  Payment Status :{" "}
                </h2>
             <div className="flex justify-between items-center gap-2 mt-2">
                 <p className=" text-base font-semibold text-gray-500">{order.payment_status}</p>
                <button className="text-xs font-medium px-2 pt-0.5 rounded-md text-white bg-green-500 pb-1">Pay Now</button>
             </div>

                {/* traking order start */}
                  <h2 className="text-lg font-semibold text-gray-700 mt-3">
                    Tracking Order :{" "}
                  </h2>
                <div className="flex items-center overflow-x-auto whitespace-nowrap w-full py-3 ">
                
                  {allStatus.map((status, index) => {
                    const isCompleted =
                      allStatus.indexOf(status) <=
                      allStatus.indexOf(order.order_status);
                    const isLast = index === allStatus.length - 1;

                    return (
                      <div key={status} className="flex items-center">
                        <div
                          className={`text-center text-xs font-semibold py-1 px-2 rounded-full ${
                            isCompleted
                              ? "bg-green-500 text-white"
                              : "bg-gray-300 text-gray-700"
                          }`}
                        >
                          {status}
                        </div>

                        {!isLast && (
                          <div
                            className={`h-0.5 w-5 sm:w-10 mx-1 sm:mx-2 ${
                              isCompleted ? "bg-green-500" : "bg-gray-300"
                            }`}
                          />
                        )}
                      </div>
                    );
                  })}
                </div>
                {/* traking order end */}
              </div>
            )}

            <div className="border border-gray-100 rounded-md mt-2">
              {order.order_items.map((product) => (
                <div
                  key={product.product_id}
                  className="bg-white rounded-md p-2 mt-3 relative "
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.product_img}
                      alt={product.product_name}
                      width={300}
                      height={300}
                      className="object-cover h-20 w-20 rounded-md bg-green-100"
                    />
                    <div>
                      <h2 className="text-gray-800 text-base font-semibold">
                        {product.product_name}
                      </h2>

                      <div className="flex items-center gap-2 mt-2">
                        <p className="text-gray-600 text-sm font-semibold">
                          ${product.price}
                        </p>
                        <p className="text-gray-600 text-sm font-semibold">
                          QtY: {product.quantity}
                        </p>
                      </div>
                       <div  className="flex items-center gap-2 mt-2">

                    {product.variations.map((variation) => (

                     
                        <p key={variation.variation_slug} className="text-gray-600 text-sm font-semibold">
                          {variation.variation_name}: {variation.variation_value}
                        </p>
                    
                  ))}
                  </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      })}

      {filteredOrders.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          <h2 className="text-lg font-semibold">No Orders Found</h2>
          <p className="text-sm">Please check back later or contact support.</p>
        </div>
      )}
    </MaxWidthWrapper>
  );
};



export default function OngoingPage() {
  return (
    <Suspense fallback={<div className="p-5 text-gray-600">Loading orders...</div>}>
      <Ongoing />
    </Suspense>
  );
}