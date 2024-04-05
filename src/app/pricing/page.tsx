import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const Pricing = () => {
  return (
    <div className="mt-16 px-20 py-2">
      <h1 className="font-bold text-4xl text-center">Pricing</h1>
      <div className="text-center mt-4">
        New users get 10 credits for free.{" "}
        <Link
          href="/api/auth/signin"
          className="underline hover:text-[#C84630] transition duration-300"
        >
          Login
        </Link>{" "}
        to start using the free credits.
      </div>
      <div className="gap-36 text-center justify-center flex my-14">
        <Card className="w-[300px] h-[600px]">
          <CardHeader>
            <CardTitle className="text-slate-500 text-md pt-5">Free</CardTitle>
            <CardDescription>
              <span className="font-bold text-3xl text-black">TND 0</span>
              /month
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <ul>
              <li className="flex pl-2">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>10 Conversions</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Email Support</p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">
                  Upto 4,000 characters in input code / conversion
                </p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center mt-[266px]">
            <Button>Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[600px]">
          <CardHeader>
            <div className="absolute top-[295px] right-[630px]">
              <p className="bg-[#c1e8f7] text-[#0b72e0] py-[5px] px-[10px] rounded-md font-bold text-sm">
                Most Popular
              </p>
            </div>

            <CardTitle className="text-slate-500 text-md pt-5">
              Pro Subscription
            </CardTitle>
            <CardDescription>
              <span className="font-bold text-3xl text-black">TND 25</span>
              /month
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <ul>
              <li className="flex pl-2">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Unlimited Conversions</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Code generation tool</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Code explanation tool</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Priority Email Support</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Billed Monthly</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Cancel Anytime</p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">
                  Upto 20,000 characters in input code / conversion
                </p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">
                  Faster conversions with streamed responses
                </p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">14-day Money Back Guarantee</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Get Started</Button>
          </CardFooter>
        </Card>

        <Card className="w-[300px] h-[600px]">
          <CardHeader>
            <div className="absolute top-[295px] right-[185px]">
              <p className="bg-[#f8ecb2] text-black py-[5px] px-[10px] rounded-md font-bold text-sm">
                Save 50%
              </p>
            </div>
            <CardTitle className="text-slate-500 text-md pt-5">
              Pro Subscription
            </CardTitle>
            <CardDescription>
              <span className="font-bold text-3xl text-black">TND 150</span>
              /year
            </CardDescription>
          </CardHeader>
          <CardContent className="text-left">
            <ul>
              <li className="flex pl-2">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Unlimited Conversions</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Code generation tool</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Code explanation tool</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Priority Email Support</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Billed Yearly (save 50%)</p>
              </li>

              <li className="flex pl-2 mt-3">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p>Cancel Anytime</p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">
                  Upto 20,000 characters in input code / conversion
                </p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">
                  Faster conversions with streamed responses
                </p>
              </li>

              <li className="flex pl-2 mt-[-10px]">
                <Image
                  src="/check.svg"
                  alt=""
                  width={20}
                  height={20}
                  className="mr-2"
                />
                <p className="pt-5">14-day Money Back Guarantee</p>
              </li>
            </ul>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Get Started</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Pricing;
