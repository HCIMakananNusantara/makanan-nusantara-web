import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";

import Thumbnail from "../assets/images/Homepage-Thumbnail.png";
import PetaKuliner from "../assets/images/Homepage-PetaKuliner.png";
import ResepKuliner from "../assets/images/Homepage-ResepKuliner.png";

export default function Homepage() {
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
            "Look deep into nature, and then you will understand everything
            better."
          </h1>
          <h1 className="text-xl text-white">- Albert Einstein -</h1>
        </div>
      </div>

      <div className="border-4 shadow-xl mx-60 my-10 rounded-3xl">
        <div className="flex flex-auto justify-center items-center">
          <div className="border-4 bg-green-950 rounded-2xl text-white text-left p-6 ml-2 max-w-96 max-h-48 ">
            <h1 className="text-4xl">Peta Kuliner Indonesia</h1>
          </div>
          <div className="mx-8 p-8">
            <h1 className="text-2xl text-justify">
              Peta yang memuat informasi tentang makanan - makanan di Indonesia,
              terdiri dari pulau Sumatera, Jawa, Kalimantan, Bali & Nusa
              Tenggara, Sulawesi, Maluku & Papua.{" "}
            </h1>
          </div>
          <Image
            src={PetaKuliner}
            alt="Peta Kuliner Indonesia"
            className="border-4 rounded-2xl shadow-2xl max-w-96 max-h-48 object-cover"
          />
        </div>
      </div>

      <div className="border-4 shadow-xl mx-60 my-10 rounded-3xl">
        <div className="flex flex-row-reverse justify-center items-center">
          <div className="border-4 bg-green-950 rounded-2xl text-white text-left p-6 ml-2 max-w-96 max-h-48 ">
            <h1 className="text-4xl">Resep Kuliner Indonesia</h1>
          </div>
          <div className="mx-8 p-8">
            <h1 className="text-2xl text-justify">
              Resep dan cara pembuatan tentang makanan - makanan di Indonesia,
              lengkap beserta video dari content creator yang ahli dalam membuat
              makanan.{" "}
            </h1>
          </div>
          <Image
            src={ResepKuliner}
            alt="Resep Kuliner Indonesia"
            className="border-4 rounded-2xl shadow-2xl max-w-96 max-h-48 object-cover"
          />
        </div>
      </div>

      <Footer />
    </div>
  );
}
