"use client";

import { useWindowWidth } from "@/app/hooks/windowWidth";

export default function TopBarNavigation() {
  const width = useWindowWidth();

  return (
    width > 500 && (
      <ul className="text-white flex absolute left-7 top-16 text-lg mt-3 ">
        <li className="mr-5 ml-3 border-red-700, border-b-4 mb rounded" style={{paddingBottom: "13px", borderColor: "#ffb007"}}>Home</li>
        <li className="mr-5">Skateboard</li>
        <li className="mr-5">Longboard</li>
        <li className="mr-5">Moda</li>
        <li className="mr-5">Ofertas</li>
      </ul>
    )
  );
}
