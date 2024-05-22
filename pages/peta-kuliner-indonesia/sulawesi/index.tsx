import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Sulawesi
import Coto from "@/assets/images/Resep-CotoMakassar.png";

export default function PetaSulawesi() {
  return (
    <>
      <PetaHeader pageTitle="Sulawesi" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={Coto}
            altPicture=""
            name="Coto Makassar"
            link="/peta-kuliner-indonesia/sulawesi/coto-makassar"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
