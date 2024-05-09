import Image from "next/image";

import vector from "../assets/images/Footer-Background.png";

export default function Footer() {
  return (
    <footer className="relative max-h-96">
      <Image src={vector} alt="" className="w-full" />
      <div className="absolute text-white inset-0 text-justify items-center justify-center left-20 top-72">
        <h1 className="font-bold text-4xl">Bonera</h1>
        <h1 className="text-xl">The Gallery of Authentic Nusantara Soulfood</h1>
      </div>
    </footer>
  );
}
