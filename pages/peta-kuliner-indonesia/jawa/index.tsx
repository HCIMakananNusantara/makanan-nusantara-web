import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Jawa
import Rawon from "@/assets/images/Resep-Rawon.png";

export default function PetaJawa() {
  return (
    <>
      <PetaHeader pageTitle="Jawa" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={Rawon}
            altPicture=""
            name="Rawon"
            link="/peta-kuliner-indonesia/jawa/rawon"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
