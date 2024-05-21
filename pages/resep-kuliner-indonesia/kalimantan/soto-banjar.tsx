import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/soto-banjar.json";
import SotoBanjar from "@/assets/images/Pages-SotoBanjar.jpeg";
import Thumbnail from "@/assets/images/Pages-Thumb-SotoBanjar.png";

export default function resepSotoBanjar() {
  return (
    <>
      <ResepComp thumbnail={Thumbnail} title="Soto Banjar" />

      <ResepContent data={data} thumbnailUrl={SotoBanjar} />

      <Footer />
    </>
  );
}
