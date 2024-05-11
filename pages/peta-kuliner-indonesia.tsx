/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Thumbnail from "../assets/images/PetaKuliner-Thumbnail.png";
import Asset_1 from "../assets/images/PetaKuliner-Asset-1.png";
import Background from "../assets/images/PetaKuliner-Background.png";
import PetaIndonesia from "../assets/images/PetaKuliner-PetaIndonesia.png";
import { footerRight as Footer } from "@/components/Footer";

export default function PetaKulinerIndonesia() {
  return (
    <div>
      <Navbar />

      <Image
        src={Thumbnail}
        alt="Thumbnail"
        className="w-full h-96 overflow-hidden object-cover inset-1"
      />

      <div className="bg-green-950 p-1 ">
        <div className="m-10 justify-center items-center text-center">
          <h1 className="font-bold text-2xl text-white">
            "Food is our common ground, a universal experience."
          </h1>
          <h1 className="text-xl text-white">- James Beard -</h1>
        </div>
      </div>

      <div className="relative">
        <Image
          src={Asset_1}
          alt="Thumbnail"
          className="w-full h-96 overflow-hidden object-cover inset-1"
        />

        <div className="absolute inset-0 flex items-center justify-center ">
          <div className="text-white mr-[800px] mb-[100px]">
            <span className="text-5xl font-bold">Peta Indonesia</span>
            <h1 className="text-xl">
              Pilih salah satu pulau untuk menjelajahi informasi makanan
              Indonesia.
            </h1>
          </div>
        </div>
      </div>

      <Image
        src={Background}
        alt="Thumbnail"
        className="w-full h-full -mt-48"
      />

      <Image
        src={PetaIndonesia}
        alt="Thumbnail"
        className="w-full h-full -mt-[925px]"
      />

      <Footer />
    </div>
  );
}
