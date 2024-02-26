import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import EmailCapture from "./components/EmailCapture";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Hanzso's Cakery",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Nav />
        {children}

        <EmailCapture />
        <Footer />
      </body>
    </html>
  );
}
