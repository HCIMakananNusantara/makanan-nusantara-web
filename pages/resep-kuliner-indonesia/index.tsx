/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import { footerLeft as Footer } from "@/components/Footer";
import Image from "next/image";
import Cards from "@/components/Cards";

import Thumbnail from "@/assets/images/Resep-Thumbnail.png";

// Sumatera
import Rendang from "@/assets/images/Resep-Rendang.png";
// Jawa
import Rawon from "@/assets/images/Resep-Rawon.png";
// Kalimantan
import SotoBanjar from "@/assets/images/Resep-SotoBanjar.png";
// Bali dan Nusa Tenggara
import Betutu from "@/assets/images/Resep-Betutu.png";
// Sulawesi
import Coto from "@/assets/images/Resep-CotoMakassar.png";
// Maluku dan Papua
import IkanBakarM from "@/assets/images/Resep-IkanManokwari.png";

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

      <div className="relative">
        <div className="absolute mt-14 left-0 w-full h-[30px] bg-gradient-to-r from-emerald-900 to-green-950 z-[-1]"></div>
        <div className="flex flex-col items-center">
          <div className="my-10">
            <div className="flex mx-20">
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Sumatera
                </h1>
                <Cards
                  imageSource={Rendang}
                  altPicture=""
                  name="Rendang"
                  link="/resep-kuliner-indonesia/sumatera/rendang"
                />
              </div>
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Jawa
                </h1>
                <Cards
                  imageSource={Rawon}
                  altPicture=""
                  name="Rawon"
                  link="/resep-kuliner-indonesia/jawa/rawon"
                />
              </div>
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Kalimantan
                </h1>
                <Cards
                  imageSource={SotoBanjar}
                  altPicture=""
                  name="Soto Banjar"
                  link="/resep-kuliner-indonesia/kalimantan/soto-banjar"
                />
              </div>
            </div>
          </div>

          <div className="my-10">
            <div className="absolute mt-4 left-0 w-full h-[30px] bg-gradient-to-r from-emerald-900 to-green-950 z-[-1]"></div>
            <div className="flex mx-20">
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Bali & Nusa Tenggara
                </h1>
                <Cards
                  imageSource={Betutu}
                  altPicture=""
                  name="Ayam Betutu"
                  link="/resep-kuliner-indonesia/bali-nt/ayam-betutu"
                />
              </div>
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Sulawesi
                </h1>
                <Cards
                  imageSource={Coto}
                  altPicture=""
                  name="Coto Makassar"
                  link="/resep-kuliner-indonesia/sulawesi/coto-makassar"
                />
              </div>
              <div className="text-center">
                <h1 className="text-white mb-3 bg-emerald-950 text-3xl p-3 mx-10 rounded-full">
                  Maluku & Papua
                </h1>
                <Cards
                  imageSource={IkanBakarM}
                  altPicture=""
                  name="Ikan Bakar Manokwari"
                  link="/resep-kuliner-indonesia/maluku-papua/ikan-bakar-manokwari"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
