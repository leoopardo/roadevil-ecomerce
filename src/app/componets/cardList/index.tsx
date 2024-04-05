"use client";
import { useWindowWidth } from "@/app/hooks/windowWidth";
import { motion, useSpring } from "framer-motion";
import { useState } from "react";

interface CardListInterface {
  category: string;
  background?: string;
  items: {
    name: string;
    link: string;
    id: number;
    img: string;
    img2?: string;
    price: number;
    color?: string;
    color1?: string;
    color2?: string;
  }[];
}

export default function CardList({
  category,
  items,
  background,
}: CardListInterface) {
  const [hover, setHover] = useState<boolean>(false);
  const width = useWindowWidth();
  

  const wid = useSpring(0);
  return (
    <div className="pl-16 pr-16 mt-20 ">
      <h2
        className="text-2xl italic"
        style={{ overflow: "hidden", fontWeight: 800 }}
      >
        {category.toUpperCase()}:
      </h2>
      <div
        className="h-96 w-full mt-4 bg-white rounded-md flex flex-wrap flex-col justify-center"
        style={{ overflow: "hidden", backgroundColor: background ?? "#fff" }}
      >
        {items.map((item) => (
          <>
            {" "}
            <motion.div
              whileHover={{
                backgroundImage: `linear-gradient(${
                  item.color1 ?? "#ffaa0083"
                }, ${item.color2 ?? "#ffaa001f"}), url(${
                  item.img2 ?? item.img
                })`,
                scale: 1.1,
                backgroundPosition: "10px",
                cursor: "pointer",
              }}
              key={item.id}
              className="h-96 w-80 rounded-md flex"
              style={{
                backgroundImage: `url(${item.img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "300px",
                backgroundPosition: "-10px",
              }}
              onMouseOver={() => wid.set(280)}
              onMouseLeave={() => wid.set(0)}
            >
              <motion.h2
                className="text-lg h-14 w-64 text-white absolute top-14 mt-40 left-3"
                style={{ width: wid, backgroundColor: item.color ?? "#aa7d23" }}
              >
                {item.name}
              </motion.h2>
              <h2
                className="ml-52 mt-80 text-lg text-gray-600"
                style={{ fontWeight: "700" }}
              >
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(item.price)}
              </h2>
            </motion.div>
            {width > 800 ? (
              <div
                style={{
                  width: "1px",
                  backgroundColor: "#acabab29",
                  height: "450px",
                }}
              />
            ) : (
              <div
                className="mt-4 mb-4"
                style={{
                  width: "100%",
                  backgroundColor: "#acabab29",
                  height: "1px",
                }}
              />
            )}
          </>
        ))}
      </div>
    </div>
  );
}
