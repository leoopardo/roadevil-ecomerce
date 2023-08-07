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
    <motion.div
      className="w-64 h-4/4 flex justify-center items-center flex-col"
      whileHover={{
        opacity: 0.6,
        cursor: "pointer",
        scale: 1.1,
      }}
      whileTap={{ scale: 1, opacity: 0.8 }}
    >
      <h2 className="text-xl text-gray-900 text-center">{name}</h2>
      <h2
        className="text-sm text-amber-500 text-center mb-12 mt-2"
        style={{padding: 0, fontWeight: 600}}
      >
        VER TODOS
      </h2>
      <motion.img src={img} className="h-max w-max" />
    </motion.div>
  );
}
