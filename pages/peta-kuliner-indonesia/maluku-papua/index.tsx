import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Maluku dan Papua
import IkanBakarM from "@/assets/images/Resep-IkanManokwari.png";

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
        </div>
      </div>

      <Footer />
    </>
  );
}
