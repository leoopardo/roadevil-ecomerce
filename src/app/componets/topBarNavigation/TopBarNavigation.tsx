"use client";

import { useWindowWidth } from "@/app/hooks/windowWidth";
import { motion, useAnimate } from "framer-motion";
import { useEffect, useState } from "react";

export default function TopBarNavigation() {
  const width = useWindowWidth();
  const [dropdownOpen, setDropdownOpen] = useState<1 | 2 | 3 | 4 | 5 | null>(
    null
  );

  return (
    width > 500 && (
      <>
        <div className="text-white flex absolute left-7 top-16 text-lg mt-3">
          <motion.div
            whileHover={{
              color: "#ffb007",
              borderBottom: `3px sodivd`,
              cursor: "pointer",
            }}
            className="mr-5 ml-3 "
            style={{ paddingBottom: "13px", borderColor: "#ffb007" }}
          >
            <a href="/">Home</a>
          </motion.div>
          <motion.div
            whileHover={{ color: "#ffb007", cursor: "pointer" }}
            className="mr-5"
          >
            <a href="/ofertas">Ofertas</a>
          </motion.div>
          <motion.div
            whileHover={{
              color: "#ffb007",
              borderBottom: `3px sodivd`,
              cursor: "pointer",
              overflow: "hidden",
            }}
            className="mr-5"
            onMouseOver={() => {
              setDropdownOpen(1);
            }}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Skateboard
            <motion.div
              className="fixed w-fit h-60 rounded-xl flex flex-col"
              animate={{
                height: dropdownOpen === 1 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 1 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
              <ul className="pt-3 p-5 text-base">
                <motion.li
                  className="text-white mb-2 "
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  <a href="/skates/pre-montados">Skates pré-montados</a>
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  <a href="/skates/pecas">Peças</a>
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  <a href="/skates/acessorios">Acessórios</a>
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ color: "#ffb007", cursor: "pointer" }}
            className="mr-5"
            onMouseOver={() => {
              setDropdownOpen(2);
            }}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Longboard
            <motion.div
              className="fixed w-fit h-fit rounded-xl flex flex-col"
              animate={{
                height: dropdownOpen === 2 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 2 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
              <ul className="pt-3 p-5 text-base">
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Longboards pré-montados
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Peças
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Acessórios
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
          <motion.div
            whileHover={{ color: "#ffb007", cursor: "pointer" }}
            className="mr-5"
            onMouseOver={() => {
              setDropdownOpen(3);
            }}
            onMouseLeave={() => setDropdownOpen(null)}
          >
            Moda
            <motion.div
              className="fixed w-fit  h-60 rounded-xl flex flex-col"
              animate={{
                height: dropdownOpen === 3 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 3 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
              <ul className="pt-3 p-5 text-base">
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Camisetas
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Calças
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Tênis
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </>
    )
  );
}
