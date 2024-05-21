import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/rawon.json";
import Rawon from "@/assets/images/Pages-Thumb-Rawon.png";
import Thumbnail from "@/assets/images/Pages-Rawon.png";

export default function resepRawon() {
  return (
    <>
      <ResepComp thumbnail={Thumbnail} title="Rawon" />

      <ResepContent data={data} thumbnailUrl={Rawon} />

      <Footer />
    </>
  );
}
