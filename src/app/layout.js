// import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import headerNavLinks from "@/components/headerNavLinks";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata = {
  title: "Mohammed Nazrul Haq Ansari - Portfolio",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col justify-between h-screen ">
          <header className="flex items-center justify-between">
            {/* <div className="flex items-center text-base leading-5">
              <div className="hidden py-5 sm:block">
                {headerNavLinks.map((link) => (
                  <Link
                    key={link.title}
                    href={link.href}
                    className="p-1 font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                  >
                    {link.title}
                  </Link>
                ))}
              </div>
              <MobileNav />
            </div> */}
          </header>
          <main className="items-center justify-center">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
