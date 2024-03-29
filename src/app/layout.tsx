import Navbar from "@/components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";
import { SessionProvider } from "next-auth/react";
import { Analytics } from "@vercel/analytics/react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Navbar />
          {children}
          <Analytics />
          <Footer />
        </SessionProvider>
      </body>
    </html>
  );
}
