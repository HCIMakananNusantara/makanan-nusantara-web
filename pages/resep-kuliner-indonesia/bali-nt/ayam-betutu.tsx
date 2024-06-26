import ResepComp from "@/components/ResepComp";
import ResepContent from "@/components/ResepContent";
import { footerLeft as Footer } from "@/components/Footer";

import data from "@/data/ayam-betutu.json";
import Betutu from "@/assets/images/Pages-Thumbnail-Betutu.png";
import Thumbnail from "@/assets/images/Pages-AyamBetutu.png";

export default function resepAyamBetutu() {
  return (
    <>
      <ResepComp
        thumbnail={Thumbnail}
        title="Ayam Betutu"
        asal="bali-nt"
        link="https://youtu.be/8L2FdhuVbQM?si=rwY8c0mhnOCEa6lw"
      />

      <ResepContent data={data} thumbnailUrl={Betutu} />

      <Footer />
    </>
  );
}
