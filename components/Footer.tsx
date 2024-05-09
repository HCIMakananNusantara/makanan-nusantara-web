import Image from "next/image";

import vector from "../assets/images/Footer-Background.png";

export function footerLeft() {
  return (
    <footer className="relative max-h-96">
      <Image src={vector} alt="" className="w-full " />

      <div className="absolute text-white inset-0 text-justify items-end justify-end mx-48 top-72">
        <h1 className="font-bold text-4xl">Bonera</h1>
        <h1 className="text-xl">The Gallery of Authentic Nusantara Soulfood</h1>
      </div>
    </footer>
  );
}

export function footerRight() {
  return (
    <footer className="relative max-h-96 bottom-0">
      <Image src={vector} alt="" className="w-full" />

      <div className="absolute text-white inset-0 text-right mx-48 top-72">
        <h1 className="font-bold text-4xl">Bonera</h1>
        <h1 className="text-xl">The Gallery of Authentic Nusantara Soulfood</h1>
      </div>
    </footer>
  );
}
