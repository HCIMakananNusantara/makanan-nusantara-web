import PenjelasanComp from "@/components/PenjelasanComp";
import { footerRight as Footer } from "@/components/Footer";

import Thumbnail from "@/assets/images/Pen-Rendang.png";
import Makanan from "@/assets/images/Pages-Rendang.png";
import data from "@/data/rendang.json";
import Image from "next/image";

export default function penjelasanRendang() {
  return (
    <>
      <PenjelasanComp
        title="Rendang"
        asalDaerah="Sumatera"
        thumbnail={Thumbnail}
        link={"https://maps.app.goo.gl/MhPAs8zfW5hfvVxP7"}
      />

      <div className="mx-60 mt-10">
        {data.description.map((value: string, i: number) => (
          <h1 className="text-2xl font-extralight mb-2 text-justify" key={i}>
            {value}
          </h1>
        ))}
      </div>

      <div className="mt-20 ml-96">
        <Image
          src={Makanan}
          alt="Test"
          width={300}
          height={300}
          className="shadow-2xl rounded-full drop-shadow-md"
        />
      </div>

      <Footer />
    </>
  );
}
