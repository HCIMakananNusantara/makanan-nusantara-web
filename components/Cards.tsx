import Image from "next/image";

interface Props {
  imageSource: any;
  altPicture: string;
  name: string;
}

export default function Cards({ imageSource, altPicture, name }: Props) {
  return (
    <div className="mx-10 mb-2">
      <div className="shadow-lg rounded-3xl">
        <div className="flex flex-col text-center items-center">
          <Image
            src={imageSource}
            alt={altPicture}
            className="align-center object-cover w-72 h-72 border-2 rounded-[3rem] shadow-lg"
          />
          <h1 className="mb-4 mt-2 text-xl font-light">{name}</h1>
        </div>
      </div>
    </div>
  );
}
