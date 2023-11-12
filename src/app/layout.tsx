import "./globals.css";
import Navbar from "./components/navbar";
import Sidebar from "./components/project-card";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zhou Xuanle",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-screen text-[#4a3b44] subpixel-antialiased selection:bg-[#f06c9b] selection:text-[#fff8f0]`}
        suppressHydrationWarning={true}
      >
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}
