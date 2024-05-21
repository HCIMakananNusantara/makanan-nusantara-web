import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Sumatera
import Rendang from "@/assets/images/Resep-Rendang.png";
import MieAceh from "@/assets/images/Resep-MieAceh.png";
import Pempek from "@/assets/images/Resep-Pempek.png";
import Bika from "@/assets/images/Resep-Bika.png";

export default function PetaSumatera() {
  return (
    <>
      <PetaHeader pageTitle="Sumatera" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={Rendang}
            altPicture=""
            name="Rendang"
            link="/peta-kuliner-indonesia/sumatera/rendang"
          />
          <Cards imageSource={MieAceh} altPicture="" name="Mie Aceh" />
          <Cards imageSource={Pempek} altPicture="" name="Pempek" />
          <Cards imageSource={Bika} altPicture="" name="Bika Ambon Medan" />
        </div>
      </div>

      <Footer />
    </>
  );
}
