import CardList from "./componets/cardList";
import FirstCard from "./componets/firstCard/firstCard";

export default function Home() {
  return (
    <div>
      <div
        style={{
          maxHeight: "62vh",
          boxShadow: " 0px 4px 29px 2px rgba(0, 0, 0, 0.452)",
        }}
        className="overflow-hidden mt-28"
      >
        <video
          loop={true}
          muted
          autoPlay
          className="w-12/12 h-full"
          style={{ filter: "contrast(60%)" }}
        >
          <source src="/skate.mov" type="video/mp4" />
        </video>
      </div>
      <FirstCard />
      <div className="h-96"></div>
      <CardList
        category="Skateboards"
        items={[
          {
            id: 1,
            img: "https://imparskateshop.com.br/wp-content/uploads/2021/07/trrgbt.jpg",
            img2: "https://imparskateshop.com.br/wp-content/uploads/2021/07/oiuhg.jpg",
            link: "/1",
            name: "Shape Maple Habitat Nasa Logo Array Vermelho 8.125",
            price: 417.99,
            color: "#5a0474",
            color1: "#c512fc81",
            color2: "#cd12fc1c",
          },
          {
            id: 2,
            img: "https://images.tcdn.com.br/img/img_prod/790379/skate_completo_owl_sports_pandora_semi_profissional_genero_masculino_cor_roxo_tamanho_unico_669_1_c7464c0a586a8f20125f3f232c76c052.jpg",
            img2: "https://images.tcdn.com.br/img/img_prod/790379/skate_completo_owl_sports_pandora_semi_profissional_genero_masculino_cor_roxo_tamanho_unico_669_2_5fe8a16e9c59fda4e2f4c5164df04680.jpg",
            link: "/1",
            name: "SKATE COMPLETO OWL SPORTS PANDORA (SEMI PROFISSIONAL)",
            price: 351.99,
          },
          {
            id: 1,
            img: "https://images.tcdn.com.br/img/img_prod/790379/skate_completo_owl_sports_moon_time_danger_minds_125_1_20200622160052.jpg",
            link: "/1",
            name: "SKATE COMPLETO OWL SPORTS MOON TIME DANGER MINDS",
            price: 296.99,
            color: "#690147",
            color1: "#fc12ae81",
            color2: "#fc12a21c",
          },
          {
            id: 1,
            img: "https://images.tcdn.com.br/img/img_prod/790379/skate_completo_moon_time_mago_51_1_20200518131009.jpg",
            link: "/1",
            name: "SKATE COMPLETO MOON TIME MAGO",
            price: 296.99,

            color: "#408b02",
            color1: "#7bfc1281",
            color2: "#97fc121c",
          },
        ]}
      />

      <CardList
        category="Longboards"
        background="#f9f9f9"
        items={[
          {
            id: 1,
            img: "https://static.suntadistribution.com/produto/20231103093116_8054991946_D.webp",
            img2: "https://static.suntadistribution.com/produto/multifotos/20231103093117_5277994723_DM.webp",
            link: "/1",
            name: "Longboard Hlb - Freestyle 39X10'' - Draco",
            price: 417.99,
            color: "#74040d",
            color1: "#74040d68",
            color2: "#74040d68",
          },
          {
            id: 2,
            img: "https://static.suntadistribution.com/produto/20230707112947_2530997470_D.webp",
            img2: "https://static.suntadistribution.com/produto/multifotos/hd/20230707112947_3387996613_DMZ.webp",
            link: "/1",
            name: "SKATE COMPLETO OWL SPORTS PANDORA (SEMI PROFISSIONAL)",
            price: 351.99,
          },
          {
            id: 1,
            img: "https://static.suntadistribution.com/produto/1_5166001.jpg",
            img2: "https://static.suntadistribution.com/produto/multifotos/hd/1_5166001_3434_DMZ.jpg",
            link: "/1",
            name: "SKATE COMPLETO OWL SPORTS MOON TIME DANGER MINDS",
            price: 296.99,
            color: "#690147",
            color1: "#fc12ae81",
            color2: "#fc12a21c",
          },
          {
            id: 1,
            img: "https://static.suntadistribution.com/produto/1_5164001.jpg",
            link: "/1",
            name: "SKATE COMPLETO MOON TIME MAGO",
            price: 296.99,

            color: "#8b4402",
            color1: "#fc831281",
            color2: "#fc83121c",
          },
        ]}
      />

      <CardList
        category="Moda street"
        background="rgb(228 228 231)"
        items={[
          {
            id: 1,
            img: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h92/ha3/h00/h00/11423198511134/1002002760001U-01-BASEIMAGE-Hires.jpg",
            img2: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/hb3/h0c/h00/h00/11423198838814/1002002760001U-02-BASEIMAGE-Hires.jpg",
            link: "/1",
            name: "TÊNIS KNU SKOOL BLACK TRUE WHITE",
            price: 417.99,
            color: "#741104",
            color1: "#fc351281",
            color2: "#fc41121c",
          },
          {
            id: 2,
            img: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h04/hd9/h00/h00/11428260053022/4704000010001U-01-BASEIMAGE-Hires.jpg",
            img2: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h04/hd9/h00/h00/11428260053022/4704000010001U-01-BASEIMAGE-Hires.jpg",
            link: "/1",
            name: "BERMUDA MOLETOM CORE BASIC BLACK",
            price: 159.99,
          },
          {
            id: 1,
            img: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h5f/h62/h00/h00/11869464985630/4703100870010U-01-BASEIMAGE-Hires.jpg",
            link: "/1",
            name: "Camiseta Vans Off The Wall Classic Amarela",
            price: 296.99,
          },
          {
            id: 1,
            img: "https://secure-static.vans.com.br/medias/sys_master/vans/vans/h01/hfd/h00/h00/11785323610142/4601800490001U-01-BASEIMAGE-Hires.jpg",
            link: "/1",
            name: "MEIA CHECKERBOARD CREW 6 5-9 BLACK",
            price: 50,

            color: "#000000",
            color1: "#00000081",
            color2: "#0000001c",
          },
        ]}
      />
    </div>
  );
}
