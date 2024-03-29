import Image from "next/image";

const features = [
  {
    icon: "/target.svg",
    title: "High Quality Conversion",
    description:
      "We use advanced AI models to ensure that your code is converted with the highest accuracy and quality.",
  },
  {
    icon: "/zap.svg",
    title: "No Setup Required",
    description:
      "No need to download or install any software. Simply paste your code and click a button to convert it to your desired language.",
  },
  {
    icon: "/infinity.svg",
    title: "Unlimited Usage",
    description:
      "All our paid plans come with unlimited usage. Convert as much code as you want using our web tool.",
  },
  {
    icon: "/shield-check.svg",
    title: "Privacy and Security",
    description:
      "We take privacy and security seriously. We do not retain the user’s input code and/or the generated output code.",
  },
];

const Features = () => {
  return (
    <div className="mb-24">
      <div>
        <h1 className="text-4xl font-bold leading-snug text-center mt-16">
          Why us?
        </h1>
        <p className="text-md mt-6 mb-16 text-gray-500 text-center">
          With automated code conversion, you don&apos;t have to spend hours
          manually rewriting
          <br /> code in a different language.
        </p>
      </div>
      <div className="flex justify-center">
        <div className="grid w-4/6  grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
          {features.map((feature, index) => (
            <div key={index} className="relative pl-16 ">
              <div className="text-base font-semibold leading-7 text-gray-900">
                <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-green-100">
                  <Image
                    className="h-6 w-6"
                    width={24}
                    height={24}
                    src={feature.icon}
                    alt="Target Icon"
                  />
                </div>
                <p>{feature.title}</p>
              </div>
              <p className="mt-2 text-base leading-7 text-gray-700">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
