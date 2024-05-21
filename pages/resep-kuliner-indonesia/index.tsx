/* eslint-disable react/no-unescaped-entities */
import Navbar from "@/components/Navbar";
import { footerLeft as Footer } from "@/components/Footer";
import Image from "next/image";
import Cards from "@/components/Cards";
import HeaderCards from "@/components/HeaderCards";

import Thumbnail from "@/assets/images/Resep-Thumbnail.png";
// Sumatera
import Rendang from "@/assets/images/Resep-Rendang.png";
import MieAceh from "@/assets/images/Resep-MieAceh.png";
import Pempek from "@/assets/images/Resep-Pempek.png";
import Bika from "@/assets/images/Resep-Bika.png";

// Jawa
import Rawon from "@/assets/images/Resep-Rawon.png";
import NPecel from "@/assets/images/Resep-NPecel.png";
import Gudeg from "@/assets/images/Resep-Gudeg.png";
import Klepon from "@/assets/images/Resep-Klepon.png";

// Kalimantan
import SotoBanjar from "@/assets/images/Resep-SotoBanjar.png";
import Patin from "@/assets/images/Resep-Patin.png";
import KetupatKandangan from "@/assets/images/Resep-KetupatKandangan.png";
import Bingka from "@/assets/images/Resep-Bingka.png";

// Bali dan Nusa Tenggara
import Betutu from "@/assets/images/Resep-Betutu.png";
import Plecing from "@/assets/images/Resep-Plecing.png";
import Taliwang from "@/assets/images/Resep-Taliwang.png";
import PieSusu from "@/assets/images/Resep-PieSusu.png";

// Sulawesi
import Coto from "@/assets/images/Resep-CotoMakassar.png";
import Woku from "@/assets/images/Resep-Woku.png";
import Konro from "@/assets/images/Resep-Konro.png";
import Onde from "@/assets/images/Resep-Onde.png";

// Maluku dan Papua
import IkanBakarM from "@/assets/images/Resep-IkanManokwari.png";
import Colo from "@/assets/images/Resep-Colo.png";
import Papeda from "@/assets/images/Resep-Papeda.png";
import Ne from "@/assets/images/Resep-Ne.png";

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
        <HeaderCards title="Sumatera" />
        <div className="flex mx-20">
          <Cards
            imageSource={Rendang}
            altPicture=""
            name="Rendang"
            link="/resep-kuliner-indonesia/sumatera/rendang"
          />
          <Cards imageSource={MieAceh} altPicture="" name="Mie Aceh" />
          <Cards imageSource={Pempek} altPicture="" name="Pempek" />
          <Cards imageSource={Bika} altPicture="" name="Bika Ambon Medan" />
        </div>
      </div>

      <div className="mx-36 my-10">
        <HeaderCards title="Jawa" />
        <div className="flex mx-20">
          <Cards
            imageSource={Rawon}
            altPicture=""
            name="Rawon"
            link="/resep-kuliner-indonesia/jawa/rawon"
          />
          <Cards imageSource={NPecel} altPicture="" name="Nasi Pecel" />
          <Cards imageSource={Gudeg} altPicture="" name="Gudeg Jogja" />
          <Cards imageSource={Klepon} altPicture="" name="Klepon" />
        </div>
      </div>

      <div className="mx-36 my-10">
        <HeaderCards title="Kalimantan" />
        <div className="flex mx-20">
          <Cards
            imageSource={SotoBanjar}
            altPicture=""
            name="Soto Banjar"
            link="/resep-kuliner-indonesia/kalimantan/soto-banjar"
          />
          <Cards imageSource={Patin} altPicture="" name="Patin Bakar Banjar" />
          <Cards
            imageSource={KetupatKandangan}
            altPicture=""
            name="Ketupat Kandangan"
          />
          <Cards imageSource={Bingka} altPicture="" name="Bingka Barandam" />
        </div>
      </div>

      <div className="mx-36 my-10">
        <HeaderCards title="Bali & Nusa Tenggara" />
        <div className="flex mx-20">
          <Cards
            imageSource={Betutu}
            altPicture=""
            name="Ayam Betutu"
            link="/resep-kuliner-indonesia/bali-nt/ayam-betutu"
          />
          <Cards imageSource={Plecing} altPicture="" name="Plecing Kangkung" />
          <Cards imageSource={Taliwang} altPicture="" name="Ayam Taliwang" />
          <Cards imageSource={PieSusu} altPicture="" name="Pie Susu Bali" />
        </div>
      </div>

      <div className="mx-36 my-10">
        <HeaderCards title="Sulawesi" />
        <div className="flex mx-20">
          <Cards
            imageSource={Coto}
            altPicture=""
            name="Coto Makassar"
            link="/resep-kuliner-indonesia/sulawesi/coto-makassar"
          />
          <Cards imageSource={Woku} altPicture="" name="Ikan Woku Belanga" />
          <Cards imageSource={Konro} altPicture="" name="Sop Konro" />
          <Cards imageSource={Onde} altPicture="" name="Onde - Onde" />
        </div>
      </div>

      <div className="mx-36 my-10">
        <HeaderCards title="Maluku dan Papua" />
        <div className="flex mx-20">
          <Cards
            imageSource={IkanBakarM}
            altPicture=""
            name="Ikan Bakar Manokwari"
            link="/resep-kuliner-indonesia/maluku-papua/ikan-bakar-manokwari"
          />
          <Cards imageSource={Colo} altPicture="" name="Sambal Colo-Colo" />
          <Cards imageSource={Papeda} altPicture="" name="Papeda" />
          <Cards imageSource={Ne} altPicture="" name="Bubur Ne Maluku" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
