import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mark Rachapoom",
  description: "Mark Rachapoom's Personal Website",
  keywords: [
    "Mark Rachapoom",
    "Mark",
    "Rachapoom",
    "Personal Website",
    "Mark Rachapoom Phanchotong",
    "Phanchotong",
    "Rachapoom Phanchotong",
    "รัชภูมิ",
    "พันธ์ช่อทอง",
  ],
  creator: "Mark Rachapoom",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <Head>
        <title>Mark Rachapoom</title>
        <meta
          name="description"
          content={"Mark Rachapoom's Personal Website"}
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <body className={inter.className}>{children}</body>
    </html>
  );
}
