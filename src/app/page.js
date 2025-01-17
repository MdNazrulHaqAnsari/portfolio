import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_auto] items-center justify-items-center min-h-screen h-full gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h2 className="text-3xl">🚀 Coming Soon!</h2>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex flex-col p-0 sm:p-5 sm:flex-row sm:justify-between items-center w-full max-w-4xl text-center text-sm sm:text-base">
        {/* Left Content */}
        <p className="text-gray-600">
          &copy; {new Date().getFullYear()} | Mohammed Nazrul Haq Ansari
        </p>

        {/* Right Content */}
        <a
          href="https://linkedin.com/in/mohammed-nazrul-haq-ansari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-2 sm:mb-0 gap-2 text-blue-600 hover:underline"
        >
          <Image
            src="./linkedin.svg" // Replace with your LinkedIn icon path
            alt="LinkedIn"
            width={28.8}
            height={28.8}
            className="inline"
          />
        </a>
      </footer>
    </div>
  );
}
