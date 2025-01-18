import Image from "next/image"
export default function Footer() {
  return (
    <footer className="flex flex-col items-center w-full max-w-4xl row-start-3 p-0 text-sm text-center sm:p-5 sm:flex-row sm:justify-between sm:text-base">
      <p className="text-gray-600">
        &copy; {new Date().getFullYear()} | Mohammed Nazrul Haq Ansari
      </p>
      <a
        href="https://linkedin.com/in/mohammed-nazrul-haq-ansari"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 mb-2 text-blue-600 sm:mb-0 hover:underline"
      >
        <Image
          src="./linkedin.svg"
          alt="LinkedIn"
          width={28.8}
          height={28.8}
          className="inline"
        />
      </a>
    </footer>
  );
}
