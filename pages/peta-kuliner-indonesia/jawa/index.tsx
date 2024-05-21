import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Jawa
import Rawon from "@/assets/images/Resep-Rawon.png";
import NPecel from "@/assets/images/Resep-NPecel.png";
import Gudeg from "@/assets/images/Resep-Gudeg.png";
import Klepon from "@/assets/images/Resep-Klepon.png";

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
          <Cards imageSource={NPecel} altPicture="" name="Nasi Pecel" />
          <Cards imageSource={Gudeg} altPicture="" name="Gudeg Jogja" />
          <Cards imageSource={Klepon} altPicture="" name="Klepon" />
        </div>
      </div>

      <Footer />
    </>
  );
}
