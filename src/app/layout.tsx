import type { Metadata } from "next";
import { Newsreader } from "next/font/google";
import "./globals.css";

const newsReader = Newsreader({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Brasil História",
  description: "Seu canal de Historia do Brasil",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={`${newsReader.className}  antialiased`}>{children}</body>
    </html>
  );
}
