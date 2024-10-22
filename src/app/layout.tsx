import type { Metadata } from "next";
import "./globals.css";
import { Poppins } from 'next/font/google';
import { UserDetailsContextProvider } from "@/context/userDetailsContext";

export const poppins = Poppins({
	adjustFontFallback: false,
	display: 'swap',
	style: ['italic', 'normal'],
	subsets: ['latin'],
	variable: '--font-poppins',
	weight: ['200', '300', '400', '500', '600', '700']
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <UserDetailsContextProvider>
      <body
        className={`${poppins.className} ${poppins.variable} bg-[#3E3D3D]`}
      >
        {children}
      </body>
      </UserDetailsContextProvider>
    </html>
  );
}
