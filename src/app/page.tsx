import Image from "next/image";
import Ellipse1 from "@/assets/Ellipse 111.png";
import Ellipse2 from "@/assets/Ellipse 113.png";
import rda250 from "@/assets/Group 1580.png";
import line1 from "@/assets/Line 35.png";
import line2 from "@/assets/Line 36.png";
import Polygon1 from "@/assets/Polygon 2.png";
import Polygon2 from "@/assets/Polygon 3.png";
import Rectangle1 from "@/assets/Rectangle 287.png";
import Rectangle2 from "@/assets/Rectangle 289.png";
import Rectangle3 from "@/assets/Rectangle 290.png";

export default function Home() {
  return (
    <main className=" ">
      <div className= "w-full flex min-h-screen flex-row">
      <div className="w-[40%] h-screen bg-red-600 flex flex-col">
        <div className="h-[40%]">
          <Image src={Rectangle2} alt="" />
          <Image src={Ellipse1} alt="" />
        </div>
        <div className="">
        <Image src={line1} alt="" />
        </div>
        <div className="">
        <Image src={Rectangle1} alt="" />
        <Image src={Polygon2} alt="" />
        </div>
      </div>
      <div className="w-[20%] h-screen bg-yellow-600">
        <p>sdf</p>
      </div>
      <div className="w-[40%] h-screen bg-black"></div>
      </div>
    </main>
  );
}
