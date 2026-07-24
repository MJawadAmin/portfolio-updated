import type { Metadata } from "next";
import { Figtree, Syne } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  display: "swap",
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Muhammad Jawad Amin — Mobile & Web App Developer",
  description:
    "Mobile & Web App Developer with hands-on experience in MERN Stack, React Native, and Next.js. Based in Islamabad, Pakistan.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figtree.variable} ${syne.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
