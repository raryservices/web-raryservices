import type { Metadata } from "next";
import { Barlow } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

require("dotenv").config();

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "RARY Service",
  description: "Nós desenvolvemos o seu sistema",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="dark">
      <head>
        <link
          rel="shortcut icon"
          href="images/favicon.png"
          type="image/favicon.png"
        />
      </head>
      <body className={barlow.className}>
        <div className="flex flex-col w-screen min-h-screen bg-background">
          <Header />
          <main className="flex-1 p-4">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
