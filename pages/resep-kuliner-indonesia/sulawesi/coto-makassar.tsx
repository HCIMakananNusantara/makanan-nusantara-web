import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/coto-makassar.json";
import Coto from "@/assets/images/Pages-Thumb-Coto.png";
import Thumbnail from "@/assets/images/Pages-CotoMakassar.png";

export default function resepCoto() {
  return (
    <>
      <ResepComp thumbnail={Thumbnail} title="Coto Makassar" />

      <ResepContent data={data} thumbnailUrl={Coto} />

      <Footer />
    </>
  );
}
