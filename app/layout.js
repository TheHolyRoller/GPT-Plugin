

'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  return (
    <>
<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>My Next.js Page</title>
      </Head>
    <html style={{backgroundColor: 'black', overflowX: 'hidden'}}  lang="en">
      <body  style={{background: 'black'}} className={inter.className}>{children}</body>
    </html>
    </>
  );
}
