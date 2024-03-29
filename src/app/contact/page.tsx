"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  return (
    <div>
      <div className="mt-16 px-20 py-2">
        <h1 className="font-bold text-4xl text-center">Contact Us</h1>
        <div className="text-center mt-4">
          We would love to hear from you! Reach out to us on{" "}
          <Link href="mailto:codelingua00@gmail.com" className="font-bold">
            codelingua00@gmail.com
          </Link>{" "}
          or use the form
          <br /> below to share any feedback or if you have any questions.
        </div>

        <Card className="w-[550px] m-auto mt-14 mb-24">
          <CardContent className="mt-5">
            <form>
              <div className="grid w-full items-center gap-4">
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="email" className="mb-2">
                    Email
                  </Label>
                  <Input id="email" placeholder="Your Email" />
                </div>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="message" className="mb-2">
                    Message
                  </Label>
                  <Textarea placeholder="Your message" id="message" />
                </div>
              </div>

              <Button className="w-full mt-8" type="submit">
                Send
              </Button>
            </form>
          </CardContent>
          {/* <CardFooter className="flex justify-between">
            <Button className="w-full">Send</Button>
          </CardFooter> */}
        </Card>
      </div>
    </div>
  );
};

export default Contact;
