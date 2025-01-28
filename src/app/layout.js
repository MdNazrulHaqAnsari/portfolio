import "./globals.css";
import headerNavLinks from "@/components/headerNavLinks";
import Link from "next/link";
import Footer from "@/components/Footer";
import MobileNav from "@/components/MobileNav";

export const metadata = {
  title: "Mohammed Nazrul Haq Ansari - Portfolio",
  description: "Mohammed Nazrul Haq Ansari's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col min-h-screen">
          <header className="flex flex-row items-center h-12 fixed top-0 left-0 w-screen backdrop-blur-sm">
            <div className="flex  flex-row w-screen items-center text-base justify-between leading-5">
              <div className="pl-5"></div>
              <div className="hidden right-0 py-5 sm:block">
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
            </div>
          </header>
          {/* Add padding to prevent content overlap */}
          <main className="flex flex-row items-center justify-center min-h-[inherit] w-screen">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
