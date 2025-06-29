import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Toaster } from 'sonner'
import "./globals.css";
import { ReactQueryProvider } from "@/lib/providers";

const inter = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <Toaster position="top-right"
            expand={false}
            richColors />
          <main className="">{children}</main>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
