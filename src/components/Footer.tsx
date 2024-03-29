import Link from "next/link";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoGithub,
} from "react-icons/bi";
import { auth, signIn, signOut } from "@/auth";

type Props = {};

const Footer = async (props: Props) => {
  const session = await auth();

  const currentYear = new Date().getFullYear();

  return (
    <div className="flex justify-center px-20 py-2">
      <div className="text-center">
        <div className="flex justify-center mb-2">
          <BiLogoFacebookCircle className="size-7 mr-2 cursor-pointer hover:text-[#C84630] transition duration-300" />
          <BiLogoInstagram className="size-7 mr-2 cursor-pointer hover:text-[#C84630] transition duration-300" />
          <BiLogoGithub className="size-7 cursor-pointer hover:text-[#C84630] transition duration-300" />
        </div>

        {session?.user ? (
          <ul className="flex justify-center mb-2 pt-2">
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-center mb-2 pt-2">
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/">Home</Link>
            </li>
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/pricing">Pricing</Link>
            </li>
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/contact">Contact</Link>
            </li>
            <li className="mx-2 hover:text-[#C84630] transition duration-300">
              <Link href="/api/auth/signin">Login</Link>
            </li>
          </ul>
        )}
        <div>
          &copy; {currentYear}{" "}
          <Link
            href="/"
            className="cursor-pointer hover:text-[#C84630] transition duration-300"
          >
            CodeLingua
          </Link>
          . All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
