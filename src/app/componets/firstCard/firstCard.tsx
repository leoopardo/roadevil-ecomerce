/* eslint-disable @next/next/no-img-element */
"use client";

import { useWindowWidth } from "@/app/hooks/windowWidth";
import Product from "../productCard";

export default function FirstCard() {
  const width = useWindowWidth();
  console.log(width);

  function getWidth(width: number) {
    if (width > 1300) return "-75px";
    if (width > 1200) return "-130px";
    if (width > 1200) return "-130px";
    if (width > 900) return "-290px";
    if (width > 750) return "-265px";
    if (width < 600) return "-130px";

    return "-250px";
  }

  return (
    <>
      {width < 1200 ? (
        <div className="absolute w-screen flex justify-center"   style={{ top: "calc(18vw + 80px)" }}>
          <img
            width={350}
            src="/lwb.png"
            alt="life without boundaries"
         
          />
        </div>
      ) : (
        <div className="absolute top-72 w-screen flex justify-center">
          <img src="/lwb.png" alt="life without boundaries" />
        </div>
      )}

      <div
        className="w-9/12 bg-white absolute rounded-md flex justify-around flex-wrap pl-5 pr-5  "
        style={{
          marginLeft: "12%",
          marginTop: getWidth(width),
          zIndex: 1,
          minHeight: "450px",
        }}
      >
        <Product
          name="Skateboards"
          img="https://images.tcdn.com.br/img/img_prod/790379/skate_completo_owl_sports_pandora_semi_profissional_genero_masculino_cor_roxo_tamanho_unico_669_1_c7464c0a586a8f20125f3f232c76c052.jpg"
          price={599.5}
          link="/:15"
        />

        <div
          className="h-full w-5"
          style={{
            width: "1px",
            backgroundColor: "#acabab4c",
          }}
        />

        <Product
          name="Moda street"
          img="https://images.tcdn.com.br/img/img_prod/790379/tenis_owl_sports_old_school_cano_baixo_157_1_20200529164949.jpg"
          price={599.5}
          link="/:15"
        />

        <div
          className="h-full"
          style={{ width: "0.5px", backgroundColor: "#acabab4c" }}
        />

        <Product
          name="Acessórios"
          img="https://images.tcdn.com.br/img/img_prod/790379/shape_de_skate_street_owl_sports_pandora_79_1_4b0958bf82edaa9facdf71bc7a98d528.jpg"
          price={599.5}
          link="/:15"
        />
      </div>
    </>
  );
}
