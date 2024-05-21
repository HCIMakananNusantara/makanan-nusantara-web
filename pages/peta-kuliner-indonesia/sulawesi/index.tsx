import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Sulawesi
import Coto from "@/assets/images/Resep-CotoMakassar.png";
import Woku from "@/assets/images/Resep-Woku.png";
import Konro from "@/assets/images/Resep-Konro.png";
import Onde from "@/assets/images/Resep-Onde.png";

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
          <Cards imageSource={Woku} altPicture="" name="Ikan Woku Belanga" />
          <Cards imageSource={Konro} altPicture="" name="Sop Konro" />
          <Cards imageSource={Onde} altPicture="" name="Onde - Onde" />
        </div>
      </div>

      <Footer />
    </>
  );
}
