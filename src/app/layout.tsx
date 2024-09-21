import type { Metadata } from "next";
import { Inter_Tight } from 'next/font/google'
import "../styles/globals.scss";

const interTight = Inter_Tight({ 
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: "Focal Point",
  description: "The ToDo List App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body className={interTight.className}>{children}</body>
    </html>
  );
}
