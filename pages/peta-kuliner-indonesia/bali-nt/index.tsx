import Cards from "@/components/Cards";
import PetaHeader from "@/components/PetaHeader";
import { footerRight as Footer } from "@/components/Footer";

// Bali dan Nusa Tenggara
import Betutu from "@/assets/images/Resep-Betutu.png";
import Plecing from "@/assets/images/Resep-Plecing.png";
import Taliwang from "@/assets/images/Resep-Taliwang.png";
import PieSusu from "@/assets/images/Resep-PieSusu.png";

export default function PetaBali() {
  return (
    <>
      <PetaHeader pageTitle="Bali & Nusa Tenggara" />

      <div className="mx-36 my-10">
        <div className="flex mx-20">
          <Cards
            imageSource={Betutu}
            altPicture=""
            name="Ayam Betutu"
            link="/peta-kuliner-indonesia/bali-nt/ayam-betutu"
          />
          <Cards imageSource={Plecing} altPicture="" name="Plecing Kangkung" />
          <Cards imageSource={Taliwang} altPicture="" name="Ayam Taliwang" />
          <Cards imageSource={PieSusu} altPicture="" name="Pie Susu Bali" />
        </div>
      </div>

      <Footer />
    </>
  );
}
