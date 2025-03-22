"use client";

import AuthContextProvider from "@/context/AuthContext";
import { easeIn, easeInOut, motion } from "framer-motion";
import Link from "next/link";
import React from "react";
import Slider from "react-slick";
import FavoriteButton from "./FavoriteButton";
import AddToCartButton from "./AddToCartButton";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const fadeUp = (delay) => {
  return {
    hidden: { opacity: 0, y: 100, scale: 0.5 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: delay,
        duration: 0.5,
        ease: easeInOut,
      },
    },
    exit: {
      opacity: 0,
      y: 50,
      scale: 0.5,
      transition: {
        duration: 0.5,
        ease: easeInOut,
      },
    },
  };
};

export const dynamic = 'force-dynamic';

export default function FeaturedProductSlider({ featuredProducts }) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className="overflow-hidden">
      <Slider {...settings}>
        {featuredProducts?.map((product, index) => {
          return (
            <div key={index} className="p-4">
              <div className="flex flex-col-reverse md:flex-row gap-6 bg-blue-100 p-6 md:p-12 rounded-lg shadow-lg">
                <div className="flex-1 flex flex-col gap-6">
                  <h2 className="text-gray-700 text-xs md:text-base font-medium tracking-wider">
                    HOT ARRIVALS
                  </h2>
                  <div className="flex flex-col gap-4">
                    <Link href={`/products/${product?.id}`}>
                      <motion.h1
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 1, ease: easeIn }}
                        className="md:text-4xl text-2xl font-semibold text-gray-800 cursor-pointer"
                      >
                        {product?.title}
                      </motion.h1>
                    </Link>
                    <motion.p
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      className="text-gray-600 md:text-sm text-xs max-w-100 line-clamp-4"
                    >
                      {product?.shortDescription}
                    </motion.p>
                  </div>
                  <AuthContextProvider>
                    <motion.div
                      variants={fadeUp(0.4)}
                      initial="hidden"
                      whileInView="show"
                      className="flex items-center gap-4"
                    >
                      <Link href={`/checkout?type=buynow&productId=${product?.id}`}>
                        <button className="bg-black text-white text-xs md:text-sm px-5 py-2 rounded-lg shadow-md transition-all">
                          BUY NOW
                        </button>
                      </Link>
                      <AddToCartButton productId={product?.id} type="large" />
                      <FavoriteButton productId={product?.id} />
                    </motion.div>
                  </AuthContextProvider>
                </div>
                <div className="flex justify-center items-center">
                  <Link href={`/products/${product?.id}`}>
                    <motion.img
                      variants={fadeUp}
                      initial="hidden"
                      whileInView="show"
                      transition={{ delay: 0.6, duration: 1 }}
                      className="h-[14rem] md:h-[23rem] rounded-lg cursor-pointer object-cover"
                      src={product?.featureImageURL}
                      alt={product?.title}
                    />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
