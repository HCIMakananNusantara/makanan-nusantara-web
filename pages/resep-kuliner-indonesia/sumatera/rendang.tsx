import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/rendang.json";
import rendang from "@/assets/images/Pages-Rendang.png";
import Thumbnail from "@/assets/images/Resep-Rendang.png";

export default function resepRendang() {
  return (
    <>
      <ResepComp thumbnail={Thumbnail} title="Rendang" />

      <ResepContent data={data} thumbnailUrl={rendang} />

      <Footer />
    </>
  );
}