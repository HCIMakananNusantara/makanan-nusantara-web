/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Thumbnail from "@/assets/images/AboutUs-Thumbnail.png";
import Asset_1 from "@/assets/images/PetaKuliner-Asset-1.png";
import { footerRight as Footer } from "@/components/Footer";

import gambar from "@/assets/images/Thumbnail-AboutUs.png";

export default function AboutUs() {
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
            "Food is symbolic of love when words are inadequate."
          </h1>
          <h1 className="text-xl text-white">- Alan D. Wolfelt -</h1>
        </div>
      </div>

      <div className="relative">
        <Image
          src={Asset_1}
          alt="Thumbnail"
          className="w-full h-96 overflow-hidden object-cover inset-1"
        />

        <div className="absolute inset-0 flex p-24 ml-48">
          <div className="text-white mr-[800px] mb-[100px]">
            <span className="text-5xl font-bold">About Us</span>
            <h1 className="text-xl">Tentang Kami</h1>
          </div>
        </div>
      </div>

      <div className="flex mx-auto">
        <div className="border-4 shadow-xl mx-60 my-10 rounded-3xl">
          <div className="flex flex-auto justify-center items-center">
            <div className="border-4 bg-green-950 rounded-2xl text-white text-left p-10 ml-2">
              <h1 className="text-6xl">Bocoran Kuliner Nusantara</h1>
            </div>
            <div className="mx-8 p-8">
              <h1 className="text-2xl text-justify">
                Bocoran Kuliner Nusantara atau yang kami singkat sebagai Bonera,
                adalah website yang berisikan tentang penjelasan, resep, dan
                rekomendasi lokasi makanan-makanan khas tiap pulau di Indonesia.
                Kami harap website ini kedepannya akan terus berkembang dan
                menambah lebih banyak fitur dan makanan lainnya.
              </h1>
            </div>
            <Image
              src={gambar}
              width={1000}
              height={1000}
              alt="Peta Kuliner Indonesia"
              className="border-4 rounded-[150px] shadow-2xl  object-cover"
            />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
