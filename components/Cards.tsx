import Image from "next/image";
import Link from "next/link";

interface Props {
  imageSource: any;
  altPicture: string;
  name: string;
  link?: string;
}

export default function Cards({
  imageSource,
  altPicture,
  name,
  link = ""
}: Props) {
  return (
    <div className="mx-10 mb-2 shadow-2xl rounded-3xl">
      <div className="shadow-xl rounded-3xl">
        <Link href={link}>
          <div className="flex flex-col text-center items-center">
            <Image
              src={imageSource}
              alt={altPicture}
              className="align-center object-cover w-72 h-72 border-2 rounded-[3rem] shadow-lg"
            />
            <h1 className="mb-4 mt-2 text-xl font-light">{name}</h1>
          </div>
        </Link>
      </div>
    </div>
  );
}
