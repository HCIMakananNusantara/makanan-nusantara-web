import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Sumatera
import Rendang from "@/assets/images/Resep-Rendang.png";

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
        </div>
      </div>

      <Footer />
    </>
  );
}
