import type { Metadata } from "next";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Wr1te",
  description:
    "AI-powered writing assistant that helps you create high-quality content faster.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={fredoka.variable}>
      <body className={` antialiased`}>
        {children}
        <Toaster richColors={true} />
      </body>
    </html>
  );
}
