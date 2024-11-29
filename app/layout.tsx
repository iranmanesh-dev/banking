import type { Metadata } from "next";
import "./globals.css";
import { ibm, inter, rubik, vazir, yekan } from '@/lib/fonts'

export const metadata: Metadata = {
  title: "نرم افزار جامع بانکداری مدرن",
  description: "به راحتی حساب های بانکی خود را مدیریت کنید",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir='rtl'>
      <body
        className={`${rubik.variable} ${vazir.variable} ${yekan.variable} ${ibm.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
