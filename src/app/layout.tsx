import type { Metadata } from "next";
import { Geist, Geist_Mono, Cinzel, Playfair_Display, Quintessential, Pinyon_Script, Lovers_Quarrel } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const quintessential = Quintessential({
  weight: "400",
  variable: "--font-quintessential",
  subsets: ["latin"],
});

const pinyonScript = Pinyon_Script({
  weight: "400",
  variable: "--font-pinyon-script",
  subsets: ["latin"],
});

const loversQuarrel = Lovers_Quarrel({
  weight: "400",
  variable: "--font-lovers-quarrel",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Wedding of Anita & Olga",
  description: "Invitation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${cinzel.variable} ${playfair.variable} ${quintessential.variable} ${pinyonScript.variable} ${loversQuarrel.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-center" reverseOrder={false} />
      </body>
    </html>
  );
}
