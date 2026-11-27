import "./globals.css";
import { Inter } from "next/font/google";
import { site } from "./data/site";

const inter = Inter({ subsets: ["latin"] });

const description = `${site.name} — ${site.role} in ${site.location}. Heat sinks and sensor mounts for terahertz imaging sensors at TeraDAR, plus award-winning vehicle, robotics and research projects.`;

export const metadata = {
  metadataBase: new URL("https://xuanlezhou.github.io"),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description,
    url: "https://xuanlezhou.github.io",
    siteName: site.name,
    images: ["/photos/profile.jpg"],
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} w-full overflow-x-hidden text-[#4a3b44] subpixel-antialiased selection:bg-[#f06c9b] selection:text-[#fff8f0]`}
        suppressHydrationWarning={true}
      >
        <main>{children}</main>
      </body>
    </html>
  );
}
