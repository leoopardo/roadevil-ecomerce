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
            Home
          </motion.div> <motion.div
            whileHover={{ color: "#ffb007", cursor: "pointer" }}
            className="mr-5"
          >
            Ofertas
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
              className="fixed w-32  h-60 rounded flex flex-col"
              animate={{
                height: dropdownOpen === 1 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 1 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
              <ul className="pt-3 pl-5 text-sm">
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 1
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 2
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 3
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
              className="fixed w-32  h-60 rounded flex flex-col"
              animate={{
                height: dropdownOpen === 2 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 2 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
             <ul className="pt-3 pl-5 text-sm">
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 1
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 2
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 3
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
              className="fixed w-32  h-60 rounded flex flex-col"
              animate={{
                height: dropdownOpen === 3 ? 200 : 0,
                overflow: "hidden",
                display: dropdownOpen === 3 ? "flex" : "none",
                backgroundColor: "#000000d5",
                paddingTop: "20px",
              }}
              style={{ top: "100px", display: "none", height: 0 }}
            >
              <ul className="pt-3 pl-5 text-sm">
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 1
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 2
                </motion.li>
                <motion.li
                  className="text-white mb-2"
                  whileHover={{ color: "#ffb007", cursor: "pointer" }}
                >
                  Opção 3
                </motion.li>
              </ul>
            </motion.div>
          </motion.div>
         
        </div>
      </>
    )
  );
}
