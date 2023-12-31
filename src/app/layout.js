import "./globals.css";
import { Roboto } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Roboto({
  weight: ["300", "400", "500", "700"],
  subsets: ["latin"],
  styles: ["italic", "normal"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
