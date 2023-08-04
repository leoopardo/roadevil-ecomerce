"use client";

import { useWindowWidth } from "@/app/hooks/windowWidth";
import { motion } from "framer-motion";

interface ProductInterface {
  name: string;
  img: string;
  link: string;
  price: number;
}

export default function Product({ name, img, link, price }: ProductInterface) {
  const width = useWindowWidth();

  return (
    <div
      className="w-64 h-4/4 flex justify-center items-center flex-col"
      style={{}}
    >
      <h2
        className="text-xl text-gray-900 text-center mb-12"
       
      >
        {name}
      </h2>
      <motion.img
        src={img}
        className="h-max w-max"
        style={{
          backgroundImage: `url(${img})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
    </div>
  );
}
