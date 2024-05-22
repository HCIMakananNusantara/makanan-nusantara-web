import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/ikan-manokwari.json";
import Ikan from "@/assets/images/Pages-Thumb-Ikan.png";
import Thumbnail from "@/assets/images/Pages-Ikan.png";

export default function resepSotoBanjar() {
  return (
    <>
      <ResepComp
        thumbnail={Thumbnail}
        title="Ikan Bakar Manokwari"
        asal="maluku-papua"
      />

      <ResepContent data={data} thumbnailUrl={Ikan} />

      <Footer />
    </>
  );
}
