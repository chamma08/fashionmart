"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Collections = ({ collections }) => {
  if (collections.length === 0) return null;

  return (
    <div className="my-16 w-[80%] mx-auto">
      <motion.h2 
        className="text-2xl font-bold text-center mb-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Explore Our Latest Collections For You
      </motion.h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="grid grid-cols-1 gap-4">
          <div className="rounded-lg overflow-hidden relative h-[344px]">
            <img
              src={collections[0]?.imageURL}
              alt={collections[0]?.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
              <h3 className="text-lg font-bold mb-1">{collections[0]?.title}</h3>
              <p className="text-xs mb-2">{collections[0]?.subTitle}</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {collections.slice(1, 3).map((collection, index) => (
              <div key={index} className="rounded-lg overflow-hidden relative h-[313px]">
                <img
                  src={collection.imageURL}
                  alt={collection.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <h3 className="text-sm font-bold">{collection.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-lg overflow-hidden relative h-[677px]">
          <img
            src={collections[3]?.imageURL}
            alt={collections[3]?.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent text-white">
            <h3 className="text-xl font-bold mb-1">{collections[3]?.title}</h3>
            <p className="text-sm mb-3">{collections[3]?.subTitle}</p>
            <Link href={`/collections/${collections[3]?.id}`}>
              <button className="px-4 py-1 bg-white text-black text-xs font-medium rounded">
                Shop Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collections;
