/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import Image from "next/image";

import Thumbnail from "@/assets/images/PetaKuliner-Thumbnail.png";
import Asset_1 from "@/assets/images/PetaKuliner-Asset-1.png";
import Background from "@/assets/images/PetaKuliner-Background.png";
import PetaIndonesia from "@/assets/images/PetaKuliner-PetaIndonesia.png";
import { footerRight as Footer } from "@/components/Footer";
import Link from "next/link";

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

      <div className="flex mx-64 justify-between my-2">
        <Link href="/peta-kuliner-indonesia/sumatera">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Sumatera
          </h1>
        </Link>
        <Link href="/peta-kuliner-indonesia/jawa">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Jawa
          </h1>
        </Link>
        <Link href="/peta-kuliner-indonesia/kalimantan">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Kalimantan
          </h1>
        </Link>
        <Link href="/peta-kuliner-indonesia/bali-nt">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Bali & Nusa Tenggara
          </h1>
        </Link>
        <Link href="/peta-kuliner-indonesia/sulawesi">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Sulawesi
          </h1>
        </Link>
        <Link href="/peta-kuliner-indonesia/maluku-papua">
          <h1 className="font-bold text-white bg-green-950 p-2 rounded-xl">
            Maluku & Papua
          </h1>
        </Link>
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
        className="w-full h-full -mt-64"
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
