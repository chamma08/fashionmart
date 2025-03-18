"use client";

import { useState } from "react";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import Slider from "react-slick";
import { easeInOut, motion } from "framer-motion";

const fadeUp = (delay) => ({
  hidden: { opacity: 0, y: 100, scale: 0.8 },
  show: {
    opacity: 1, y: 0, scale: 1,
    transition: { delay: delay, duration: 0.6, ease: easeInOut },
  },
  exit: {
    opacity: 0, y: 50, scale: 0.8,
    transition: { duration: 0.4, ease: easeInOut },
  },
});

export default function Categories({ categories }) {
  const [showAll, setShowAll] = useState(false);
  const visibleCategories = showAll ? categories : categories.slice(0, 3);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  if (categories.length === 0) return null;

  return (
    <div className="flex flex-col gap-8 justify-center overflow-hidden md:p-10 p-5">
      <div className="flex justify-center w-full">
        <motion.h1
          variants={fadeUp(0.5)}
          initial="hidden"
          whileInView="show"
          className="text-xl font-semibold"
        >
          Shop By Category
        </motion.h1>
      </div>
      <div className="px-4">
        <Slider {...settings} className="space-x-10">
          {visibleCategories.map((category, index) => (
            <div key={index} className="px-4">
              <Link href={`/categories/${category?.id}`}>
                <motion.div
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="flex items-center bg-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all w-full h-52"
                >
                  <div className="flex flex-col justify-center p-4 w-full text-left gap-4">
                    <h1 className="font-semibold text-lg">{category?.name}</h1>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                      SHOP NOW
                    </button>
                  </div>
                  <img
                    src={category?.imageURL}
                    alt={category?.name}
                    className="h-40 w-40 object-cover rounded-lg"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
      {categories.length > 3 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setShowAll(!showAll)}
            className="px-6 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-all"
          >
            {showAll ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
      {showAll && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {categories.slice(3).map((category, index) => (
            <div key={index} className="px-4">
              <Link href={`/categories/${category?.id}`}>
                <motion.div
                  variants={fadeUp(0.3)}
                  initial="hidden"
                  whileInView="show"
                  whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
                  className="flex items-center bg-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all w-full h-52"
                >
                  <div className="flex flex-col justify-center p-4 w-full text-left gap-4">
                    <h1 className="font-semibold text-lg">{category?.name}</h1>
                    <button className="bg-gray-800 hover:bg-gray-900 text-white text-sm px-4 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105">
                      SHOP NOW
                    </button>
                  </div>
                  <img
                    src={category?.imageURL}
                    alt={category?.name}
                    className="h-40 w-40 object-cover rounded-lg"
                  />
                </motion.div>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
