import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Stress Capital",
  description: "When all regulators, VCs, and big guys rigged the system against little guy, we band together. An organization who helps common folks to survive in web3 world.",
  icons: [
    {
      rel: 'icon',
      type: 'image/png',
      sizes: '32x32',
      url: '/logo.png',
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/logo.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  );
}
