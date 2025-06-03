

import image1 from '/public/category/food1.png';
import image2 from '/public/category/food2.png';
import image3 from '/public/category/food3.png';
import image4 from '/public/category/food4.png';
import image5 from '/public/category/food5.png';
import image6 from '/public/category/food6.png';
import image7 from '/public/category/food3.png';
import image8 from '/public/category/food1.png';
export const orders = [
    {
        id: 1,
        order_id: "18545515555554254",
        order_number: "ord_1235245212153520",
        order_status: "PENDING",
        order_date: "2023-10-01 T12:00:00Z",
        shipping_address: {
            name: "John Doe",
            address_line_1: "123 Main St, Springfield, IL",
            address_line_2: "",
            city: "Springfield",
            area: "Downtown",
            state: "IL",
            zip_code: "62701",
            country: "USA",
            phone: "(123) 456-7890",
            email: "johndoe@example.com"
        },

        order_items: [
            {
                product_id: 1,
                product_name: "Organic Apples with Variations",
                quantity: 3,
                price: 200,
                total: 600,
                product_img: image1,
                variations: [
                    {
                        variation_name: "Size",
                        variation_slug: "size",
                        variation_value: "Large"
                    },
                    {
                        variation_name: "Color",
                        variation_slug: "color",
                        variation_value: "Red"
                    }
                ]
            },
            {
                product_id: 2,
                product_name: "Organic Bananas with Variations ",
                quantity: 2,
                price: 18,
                total: 36,
                product_img: image2,
                variations: []
            }
        ],
        subtotal: 636,
        coupons_applied: [
            {
                coupon_code: "SAVE10",
                discount_type: "percentage",
                discount_value: 10,
            },
            {
                coupon_code: "FREESHIP",
                discount_type: "fixed",
                discount_value: 5,
            }
        ],
        shipping_cost: 50,
        payment_method: "Credit Card",
        payment_status: "Paid",
        total_amount: 682,
    },
    {
        id: 2,
        order_id: "18545515555554255",
        order_number: "ord_1235245212153521",
        order_status: "PROCESSING",
        order_date: "2023-10-02 T15:30:00Z",
        shipping_address: {
            name: "Jane Smith",
            address_line_1: "456 Elm St, Metropolis, NY",
            address_line_2: "Apt 2B",
            city: "Metropolis",
            area: "Uptown",
            state: "NY",
            zip_code: "10001",
            country: "USA",
            phone: "(987) 654-3210",
            email: "janesmith@example.com"
        },
        order_items: [
            {
                product_id: 3,
                product_name: "Fresh Oranges",
                quantity: 5,
                price: 50,
                total: 250,
                product_img: image3,
                   variations: []
            },
            {
                product_id: 4,
                product_name: "Almond Milk",
                quantity: 1,
                price: 120,
                total: 120,
                product_img: image4,
                variations: []
            }
        ],
        coupons_applied: [
            {
                coupon_code: "WELCOME5",
                discount_type: "fixed",
                discount_value: 5,
            }
        ],
        shipping_cost: 30,
        payment_method: "PayPal",
        payment_status: "Pending",
        total_amount: 395,
    },
    {
        id: 3,
        order_id: "18545515555554256",
        order_number: "ord_1235245212153522",
        order_status: "DELIVERED",
        order_date: "2023-10-03 T09:45:00Z",
        shipping_address: {
            name: "Alice Johnson",
            address_line_1: "789 Oak St, Gotham, NJ",
            address_line_2: "",
            city: "Gotham",
            area: "Midtown",
            state: "NJ",
            zip_code: "07001",
            country: "USA",
            phone: "(555) 123-4567",
            email: "alicejohnson@example.com"
        },
        order_items: [
            {
                product_id: 5,
                product_name: "Greek Yogurt",
                quantity: 2,
                price: 80,
                total: 160,
                product_img: image5,
                variations: [
                    {
                        variation_name: "Size",
                        variation_slug: "size",
                        variation_value: "Small"
                    },
                    {
                        variation_name: "Color",
                        variation_slug: "color",
                        variation_value: "Red"
                    }
                ]
            },
            {
                product_id: 6,
                product_name: "Granola Bars",
                quantity: 4,
                price: 30,
                total: 120,
                product_img: image6,
                variations: []
            }
        ],
        coupons_applied: [],
        shipping_cost: 20,
        payment_method: "Debit Card",
        payment_status: "Paid",
        total_amount: 300,
    },
    {
        id: 4,
        order_id: "18545515555554257",
        order_number: "ord_1235245212153523",
        order_status: "CANCELED",
        order_date: "2023-10-04 T18:20:00Z",
        shipping_address: {
            name: "Bob Brown",
            address_line_1: "321 Pine St, Star City, CA",
            address_line_2: "Suite 5",
            city: "Star City",
            area: "Westside",
            state: "CA",
            zip_code: "90001",
            country: "USA",
            phone: "(222) 333-4444",
            email: "bobbrown@example.com"
        },
        order_items: [
            {
                product_id: 7,
                product_name: "Whole Wheat Bread",
                quantity: 1,
                price: 40,
                total: 40,
                product_img: image7,
                variations: []
            },
            {
                product_id: 8,
                product_name: "Peanut Butter",
                quantity: 2,
                price: 90,
                total: 180,
                product_img: image8,
                variations: []
            }
        ],
        coupons_applied: [
            {
                coupon_code: "BREADLOVER",
                discount_type: "percentage",
                discount_value: 15,
            }
        ],
        shipping_cost: 25,
        payment_method: "Cash on Delivery",
        payment_status: "Unpaid",
        total_amount: 245,
    }
];


export const allOrderStatus = [
    "PENDING",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "CANCELED",
    "CONFIRMED"
];