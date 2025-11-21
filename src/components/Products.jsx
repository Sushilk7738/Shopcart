import { useState } from "react";
import Layout from "./Layout"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import "swiper/css";


const Products = ()=>{
    const [products, setProducts] =  useState([
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/a.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/b.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/c.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/d.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/e.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/f.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/g.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/h.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/j.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/k.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/l.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/m.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/n.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/l.jpg'
        },
        {
            title: 'New Denim shirts mens',
            price: 1200,
            discount: 15,
            thumbnail: '/products/p.jpg'
        },
    ])
    
    return(
        <Layout>
            <div>
                <div className="md:p-16 p-8">
                    <h1 className="text-3xl font-bold text-center">All Products</h1>
                    <p className="text-center text-gray-600 md:w-7/12 mx-auto mt-2 mb-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio in nesciunt veniam, numquam placeat vitae totam hic dolor iure quos ducimus quidem dignissimos modi  </p>
                    <div className="md:w-10/12 mx-auto grid md:grid-cols-4 gap-12">
                        {
                            products.map((item, index)=>(
                                <div key={index} className="bg-white shadow-lg">
                                    <img src={item.thumbnail} alt="img" />
                                    <div className="p-4">
                                        <h1 className="text-lg font-semibold">{item.title}</h1>
                                        <div className="space-x-2">
                                            <label className="font-semibold text-lg">₹{item.price - (item.price* item.discount)/100}</label>
                                            <del>₹{item.price}</del>
                                            <label className="text-gray-600">({item.discount}%)</label>
                                        </div>
                                        <button className="bg-green-500 py-2 w-full rounded text-white font-semibold mt-4">Buy Now</button>
                                        <button className="bg-rose-500 py-2 w-full rounded text-white font-semibold mt-2">
                                            <i className="ri-shopping-cart-line mr-2"></i>
                                            Add to Cart
                                        </button>
                                            
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Products