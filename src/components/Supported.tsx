import Image from "next/image";
import fs from "fs";
import path from "path";
import Link from "next/link";

const Supported = () => {
  const languageImages = fs
    .readdirSync(path.join(process.cwd(), "public", "languages"))
    .filter((fileName) => fileName !== "default.svg")
    .map((fileName) => ({
      src: `/languages/${fileName}`,
      alt: fileName,
      width: 60,
      height: 60,
    }));

  return (
    <>
      <div>
        <h1 className="text-4xl font-bold leading-snug text-center mt-16">
          Languages Supported
        </h1>
        <p className="text-md mt-2 text-gray-500 text-center">
          Convert code across 8+ programming languages
        </p>
      </div>
      <div className="flex justify-center mt-16 mb-16">
        {languageImages.map((image, index) => (
          <div key={index} className="mr-24 ">
            <Link href="/">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="grayscale hover:grayscale-0 transition duration-500"
              />
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Supported;
