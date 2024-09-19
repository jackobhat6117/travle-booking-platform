import type { Metadata } from "next";
import "./globals.css";
import { Dongle, Dosis, Gowun_Dodum } from "next/font/google";

export const metadata: Metadata = {
  title: "One Platform",
  description: "One platform to rule them all",
};

const dongle = Gowun_Dodum({ 
  weight: "400",
  display: 'swap',
  subsets: ['latin'],
  variable: '--font-sans',
  
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html  lang="en">
      <body className={dongle.className}>
        <div className="grid min-h-screen w-full">
          <main className="">{children}</main>
        </div>
      </body>
    </html>
  );
}
