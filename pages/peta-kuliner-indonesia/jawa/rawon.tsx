import PenjelasanComp from "@/components/PenjelasanComp";
import { footerRight as Footer } from "@/components/Footer";

import Thumbnail from "@/assets/images/Pages-Rawon.png";
import Makanan from "@/assets/images/Pages-Thumb-Rawon.png";
import data from "@/data/rawon.json";
import Image from "next/image";

export default function penjelasanSotoBanjar() {
  return (
    <>
      <PenjelasanComp
        title="Rawon"
        asalDaerah="Jawa"
        thumbnail={Thumbnail}
        link={"https://maps.app.goo.gl/HE9j7zvEYxKX8v9P6"}
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
