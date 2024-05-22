import PenjelasanComp from "@/components/PenjelasanComp";
import { footerRight as Footer } from "@/components/Footer";

import Thumbnail from "@/assets/images/Pages-CotoMakassar.png";
import Makanan from "@/assets/images/Pages-Thumb-Coto.png";
import data from "@/data/ikan-manokwari.json";
import Image from "next/image";

export default function penjelasanIkanManokwari() {
  return (
    <>
      <PenjelasanComp
        title="Ikan Bakar Manokwari"
        asalDaerah="Maluku-Papua"
        thumbnail={Thumbnail}
        link={"https://maps.app.goo.gl/6ZTwdpaEp83bc2SV7"}
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
