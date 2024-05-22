import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Kalimantan
import SotoBanjar from "@/assets/images/Resep-SotoBanjar.png";

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
        </div>
      </div>

      <Footer />
    </>
  );
}
