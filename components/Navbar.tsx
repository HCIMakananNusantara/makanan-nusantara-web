import Link from "next/link";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  return (
    <div className="bg-gradient-to-b from-emerald-900 to-green-950 py-5">
      <div className="flex flex-start justify-start items-center mx-40">
        <div className="flex flex-1">
          <div className="relative rounded-md shadow-sm justify-center items-center m-2"></div>
        </div>

        <div className="flex text-white">
          <Link href="/homepage" className="mx-6">
            Home
          </Link>
          <Link href="/about-us" className="mx-6">
            About Us
          </Link>

          <Link href={"/"}>
            <RxCross1 className="text-white w-6 h-6 ml-10" />
          </Link>
        </div>
      </div>
    </div>
  );
}
