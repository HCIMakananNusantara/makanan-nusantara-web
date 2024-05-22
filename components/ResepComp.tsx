import Link from "next/link";
import { RxCross1 } from "react-icons/rx";
import { FaLessThan } from "react-icons/fa";
import Image from "next/image";

interface props {
  title: string;
  thumbnail: any;
  asal: string;
}

function convSpacetoStrip(input: string) {
  return input.replaceAll(" ", "-");
}

export default function ResepComp({ title, thumbnail, asal }: props) {
  let titleFix = convSpacetoStrip(title);

  return (
    <>
      <div className="bg-gradient-to-b from-emerald-900 to-green-950">
        <div className="flex flex-start justify-start items-center mx-40">
          <div className="flex flex-1">
            <div className="mr-20">
              <Link
                className="flex items-center my-2 px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                href="/resep-kuliner-indonesia"
              >
                <FaLessThan />
              </Link>
            </div>
            <h1 className="text-xl text-white mt-[9px]">{title}</h1>
          </div>

          <div className="flex text-white">
            <Link href="/homepage" className="mx-6">
              Home
            </Link>
            <Link href="/about-us" className="mx-6">
              About Us
            </Link>

            <Link
              href={`/peta-kuliner-indonesia/${asal.toLowerCase()}/${titleFix.toLowerCase()}`}
            >
              <RxCross1 className="text-white w-6 h-6 ml-10" />
            </Link>
          </div>
        </div>

        <Image
          src={thumbnail}
          alt="Thumbnail"
          className="w-full h-96 overflow-hidden object-cover inset-1"
        />
      </div>

      <div className="flex mx-60 mt-10 justify-between">
        <h1 className="text-4xl mt-2">Resep {title}</h1>

        <div className="p-2 px-20 bg-gradient-to-r from-emerald-950 to-green-950 rounded-3xl">
          <h1 className="text-white font-bold text-2xl">Video Resep</h1>
        </div>
      </div>
    </>
  );
}
