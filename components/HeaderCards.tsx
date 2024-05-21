interface Props {
  title: string;
}

import Image from "next/image";
import Bg from "@/assets/images/HeaderCards-BG.png";

export default function HeaderCards({ title }: Props) {
  return (
    <div className="mb-10 ml-10 relative">
      <Image
        src={Bg}
        alt=""
        className="w-full overflow-hidden object-cover inset-1"
      />
      <a className="absolute inset-0 p-6 ml-7 -mt-2 text-white text-5xl">
        {title}
      </a>
    </div>
  );
}
