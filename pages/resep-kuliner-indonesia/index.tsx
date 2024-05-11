/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Thumbnail from "../../assets/images/Resep-Thumbnail.png";
import Rendang from "../../assets/images/Rendang.png";
import Cards from "@/components/Cards";

export default function resepKulinerIndonesia() {
  return (
    <div>
      <Navbar />
      <Image
        src={Thumbnail}
        alt="Thumbnail"
        className="w-full h-96 overflow-hidden object-cover inset-1"
      />
      <div className="bg-green-950 p-1">
        <div className="m-10 justify-center items-center text-center">
          <h1 className="font-bold text-2xl text-white">
            "Food is not rational. Food is culture, habit, craving, and images
            identity."
          </h1>
          <h1 className="text-xl text-white">- Jonathan Safran Foer -</h1>
        </div>
      </div>
      <div className="mx-36 my-10">
        <div className="flex">
          <Cards imageSource={Rendang} altPicture="" name="Rendang" />
          <Cards imageSource={Rendang} altPicture="" name="Mie Aceh" />
          <Cards imageSource={Rendang} altPicture="" name="Pempek" />
          <Cards imageSource={Rendang} altPicture="" name="Bika Ambon Medan" />
        </div>
      </div>
    </div>
  );
}
