import "./globals.css";
import { Salsa } from "next/font/google";

const font = Salsa({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "Grand Mill Group",
  description: "Un ishlab chiqarish",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={font.className}>{children}</body>
    </html>
  );
}
