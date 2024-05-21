import Link from "next/link";
import { FaLessThan } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

interface Props {
  pageTitle: string;
}

export default function PetaHeader({ pageTitle }: Props) {
  return (
    <>
      <div className="bg-gradient-to-b from-emerald-900 to-green-950 py-2">
        <div className="flex flex-start justify-start items-center mx-40">
          <div className="flex flex-1">
            <div className="mr-20">
              <Link
                className="flex items-center my-2 px-3 py-2 border rounded text-gray-200 border-gray-400 hover:text-white hover:border-white"
                href="/peta-kuliner-indonesia"
              >
                <FaLessThan />
              </Link>
            </div>
            <h1 className="text-xl text-white mt-[9px]">Peta Kuliner</h1>
          </div>

          <div className="flex text-white">
            <Link href="/homepage" className="mx-6">
              Home
            </Link>
            <Link href="/about-us" className="mx-6">
              About Us
            </Link>
            <Link href="/feedback" className="mx-6">
              Feedback
            </Link>
            <RxCross1 className="text-white w-6 h-6 ml-10" />
          </div>
        </div>
      </div>

      <div className="bg-green-950">
        <h1 className="text-6xl mx-36 py-5 text-white">{pageTitle}</h1>
      </div>
    </>
  );
}
