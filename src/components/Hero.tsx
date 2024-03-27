import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex justify-between  mt-20">
      <div className="w-2/6">
        <h1 className="text-4xl font-bold leading-snug">
          The best way to <br />
          convert your code to any other language.
        </h1>
        <Button className="mt-8 w-2/6">Try Now</Button>
        <p className="text-md mt-8 text-gray-500">
          Code conversion made super simple to save you hours of time from
          learning a completely new language.
        </p>
      </div>
      <div>
        <video
          autoPlay
          muted
          loop
          width="600"
          className="border-2 rounded-lg shadow-lg"
        >
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Hero;
