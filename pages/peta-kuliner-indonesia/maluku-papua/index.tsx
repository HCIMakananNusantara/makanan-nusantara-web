import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Maluku dan Papua
import IkanBakarM from "@/assets/images/Resep-IkanManokwari.png";
import Colo from "@/assets/images/Resep-Colo.png";
import Papeda from "@/assets/images/Resep-Papeda.png";
import Ne from "@/assets/images/Resep-Ne.png";

export default function PetaPapua() {
  return (
    <>
      <PetaHeader pageTitle="Maluku & Papua" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={IkanBakarM}
            altPicture=""
            name="Ikan Bakar Manokwari"
            link="/peta-kuliner-indonesia/maluku-papua/ikan-bakar-manokwari"
          />
          <Cards imageSource={Colo} altPicture="" name="Sambal Colo-Colo" />
          <Cards imageSource={Papeda} altPicture="" name="Papeda" />
          <Cards imageSource={Ne} altPicture="" name="Bubur Ne Maluku" />
        </div>
      </div>

      <Footer />
    </>
  );
}
