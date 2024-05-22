import Image from "next/image";

import logo from "../assets/images/Homepage-Logo.png";
import vector from "../assets/images/Homapage-Vector.png";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="bg-gradient-to-r from-gray-400 to-white">
      <Image src={vector} alt="" className="fixed right-0 h-full w-auto" />
      <div className="flex justify-center items-center h-screen">
        <div className="mr-72">
          <h1 className="font-bold text-6xl mb-3">Bonera</h1>
          <h1 className="text-3xl">
            The website you are going to is not available.{" "}
            <a className="font-bold">Error 404</a>
          </h1>
          <div className="flex mt-6">
            <div className="mr-5 border-2 border-black rounded-3xl bg-white">
              <Link
                href="/homepage"
                className="flex justify-center items-center mx-2"
              >
                <h1 className="font-bold mx-auto justify-center p-2">
                  BACK TO HOMEPAGE
                </h1>
              </Link>
            </div>
          </div>
        </div>

        <Image
          src={logo}
          alt="Test"
          width={500}
          height={500}
          className="hidden xl:flex shadow-2xl rounded-full drop-shadow-md"
        />
      </div>
    </div>
  );
}
