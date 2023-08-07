import Image from "next/image";
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
        <video loop={true} muted autoPlay className="w-12/12 h-full">
          <source src="/skate.mp4" type="video/mp4" />
        </video>
      </div>

      <FirstCard />
      <div className="h-96"></div>
    </div>
  );
}
