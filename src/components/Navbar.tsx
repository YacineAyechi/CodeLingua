import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";
import { auth, signIn, signOut } from "@/auth";

type Props = {};

function SignOut() {
  return (
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
    >
      <Button type="submit">Log Out</Button>
    </form>
  );
}

const Navbar = async (props: Props) => {
  const session = await auth();
  console.log(session);

  return (
    <div className="flex justify-between px-20 py-2">
      <Link href="/">
        <Image
          src="/logo.png"
          alt=""
          width={250}
          height={60}
          className="h-[60px]"
        />
      </Link>

      <div>
        <ul className="flex">
          {session?.user ? (
            <>
              <li className="mx-5 my-2 font-bold hover:text-[#C84630] transition duration-300">
                <Link href="/convert">Convert</Link>
              </li>
              <li className="mx-5 my-2 font-bold hover:text-[#C84630] transition duration-300">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="mx-5 pr-5 my-2 font-bold hover:text-[#C84630] transition duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </>
          ) : (
            <>
              <li className="mx-5 my-2 font-bold hover:text-[#C84630] transition duration-300">
                <Link href="/pricing">Pricing</Link>
              </li>
              <li className="mx-5 pr-5 my-2 font-bold hover:text-[#C84630] transition duration-300">
                <Link href="/contact">Contact</Link>
              </li>
            </>
          )}

          <li className="font-bold">
            {session?.user ? (
              <div className="flex">
                {session.user.name && session.user.image && (
                  <Image
                    src={session.user.image}
                    alt={session.user.name}
                    width={40}
                    height={40}
                    className="rounded-full mr-4"
                  />
                )}
                <SignOut />
              </div>
            ) : (
              <Button asChild variant="out">
                <Link href="/api/auth/signin">Login</Link>
              </Button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
