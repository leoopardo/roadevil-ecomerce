/* eslint-disable @next/next/no-page-custom-font */
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Head from "next/head";
import Image from "next/image";
import "./globals.css";
import TopBarNavigation from "./componets/topBarNavigation/TopBarNavigation";
import ScrollTopBar from "./componets/scrollTopBar/scrollTopBar";
import Footer from "./componets/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roadevil",
  description: "Life without boundaries",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,500;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="bg-zinc-200 text-zinc-950" style={{ padding: 0 }}>
        <div
          className="flex items-center justify-between w-screen"
          style={{
            backgroundColor: "#131314",
            position: "fixed",
            top: 0,
            left: 0,
            height: "120px",
            zIndex: 9,
          }}
        >
          <ScrollTopBar />
          <Image
            width={180}
            height={30}
            style={{ zIndex: 99 }}
            className="ml-5 absolute top-5 left-5"
            src="/roadevil.png"
            alt="roadevil"
          />
          <TopBarNavigation />
        </div>

        {children}
        <Footer />
      </body>
    </html>
  );
}
