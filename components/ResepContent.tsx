import Image from "next/image";

interface Props {
  data: any;
  thumbnailUrl: any;
}

export default function ResepContent({ data, thumbnailUrl }: Props) {
  return (
    <div className="flex mt-10 mx-60">
      <div className="mr-32">
        <h1 className="font-bold text-xl">Bahan-bahan:</h1>
        <div className="mt-2 text-xl">
          {data.bahan.map((value: any, i: number) => (
            <div className="flex" key={i}>
              <h1 className="mr-3">{i + 1}.</h1>
              <h1 className="justify-start" key={i}>
                {value}
              </h1>
            </div>
          ))}
        </div>

        <h1 className="font-bold text-xl mt-10">Bumbu Halus:</h1>
        <div className="mt-2 text-xl">
          {data.bumbu.map((value: any, i: number) => (
            <div className="flex" key={i}>
              <h1 className="mr-3">{i + 1}.</h1>
              <h1 className="justify-start" key={i}>
                {value}
              </h1>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h1 className="font-bold text-xl">Langkah-langkah:</h1>
        <div className="mt-2 text-xl">
          {data.langkah.map((value: any, i: number) => (
            <div className="flex" key={i}>
              <h1 className="mr-3">{i + 1}.</h1>
              <h1 className="justify-start" key={i}>
                {value}
              </h1>
            </div>
          ))}
        </div>

        <div className="mt-20 ml-96">
          <Image
            src={thumbnailUrl}
            alt="Test"
            width={500}
            height={500}
            className="shadow-2xl rounded-full drop-shadow-md"
          />
        </div>
      </div>
    </div>
  );
}
