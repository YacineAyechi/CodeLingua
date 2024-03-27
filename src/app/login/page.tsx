import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";

const Login = () => {
  return (
    <div>
      <div className="mt-16">
        <h1 className="font-bold text-4xl text-center">Log In</h1>
        <div className="text-center mt-4">
          New users get 10 credits for free. Log in to start using the free
          credits.
        </div>

        <Card className="w-[400px] m-auto mt-14 mb-24">
          <CardContent className="mt-6">
            <Button variant="outline" className="w-full">
              <Image src="/google.svg" alt="" width={25} height={25} />
              <p className="ml-3">Login With Google</p>
            </Button>
            <Button variant="outline" className="w-full mt-7">
              <Image src="/discord.svg" alt="" width={25} height={25} />
              <p className="ml-3">Login With Discord</p>
            </Button>
            <Button variant="outline" className="w-full mt-7">
              <Image src="/github.svg" alt="" width={25} height={25} />
              <p className="ml-3">Login With Github</p>
            </Button>
            {/* <Image src="/github.svg" alt="" width={25} height={25} /> */}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
