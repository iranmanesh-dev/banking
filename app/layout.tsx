import type { Metadata } from "next";
import "./globals.css";
import {Rubik, Vazirmatn} from 'next/font/google'

const rubik = Rubik({
  subsets: ['arabic', 'latin'],
  variable: '--font-rubik',
  weight: ['300', '400', '500', '600', '700', '800', '900']
})
const vazir = Vazirmatn({
  subsets: ['latin', 'arabic'],
  variable: '--font-vazir',
  weight: ['200', '400', '600', '800']
})

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
    <html lang="en">
      <body
        className={`${vazir.variable} ${rubik.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
