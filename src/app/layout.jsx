import { Audiowide, Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Sections/Footer";

const audiowide = Audiowide({
  variable: "--font-audiowide",
  subsets: ["latin"],
  weight: ["400"],
});

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "200", "300"],
});

export const metadata = {
  title: "Aventro",
  description: "Aventro Web Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${audiowide.variable} ${roboto.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
