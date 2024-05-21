import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Kalimantan
import SotoBanjar from "@/assets/images/Resep-SotoBanjar.png";
import Patin from "@/assets/images/Resep-Patin.png";
import KetupatKandangan from "@/assets/images/Resep-KetupatKandangan.png";
import Bingka from "@/assets/images/Resep-Bingka.png";

export default function PetaKalimantan() {
  return (
    <>
      <PetaHeader pageTitle="Kalimantan" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={SotoBanjar}
            altPicture=""
            name="Soto Banjar"
            link="/peta-kuliner-indonesia/kalimantan/soto-banjar"
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

      <Footer />
    </>
  );
}
