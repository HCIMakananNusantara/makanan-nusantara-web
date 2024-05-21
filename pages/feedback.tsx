/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Thumbnail from "../assets/images/Feedback-Thumbnail.png";
import Asset_1 from "../assets/images/PetaKuliner-Asset-1.png";
import { footerRight as Footer } from "@/components/Footer";

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
            "The only way to get rid of a temptation is to yield to it."
          </h1>
          <h1 className="text-xl text-white">- Oscar WIlde -</h1>
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
            <span className="text-5xl font-bold">Feedback</span>
            <h1 className="text-xl">
              Berikan kami penilaian untuk website kami yang lebih baik.
            </h1>
          </div>
        </div>
      </div>

      <div className="mb-72 text-justify">
        <h1></h1>
      </div>

      <Footer />
    </div>
  );
}
