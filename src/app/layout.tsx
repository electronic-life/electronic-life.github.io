import type { Metadata } from "next";
import localfont from 'next/font/local'
import './globals.css'

const supremeFont = localfont({
  src: './fonts/Supreme-Variable.ttf',
  display: 'swap'
})


export const metadata: Metadata = {
  title: "Electronic Life",
  description: "A Research Studio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={supremeFont.className}>
      <body>
        {children}
      </body>
    </html>
  )
}
