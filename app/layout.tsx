import type { Metadata } from "next";
import { Google_Sans_Code } from "next/font/google";
import "./globals.css";
import NavBar from "./ui/NavBar";

const googleSansCode = Google_Sans_Code({
  variable: "--font-google-sans-code",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Who is Conch?",
  description: "Looks like it's time to find out.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${googleSansCode.variable} antialiased flex flex-col h-screen`}>
        <NavBar />
        <div className="2xl:px-128 px-32 flex-1 flex flex-col justify-center">
          {children}
        </div>
      </body>
    </html>
  );
}
