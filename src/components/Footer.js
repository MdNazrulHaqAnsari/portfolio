import Image from "next/image";
export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 py-2 backdrop-blur-sm flex flex-col items-center w-full row-start-3 p-0 text-sm text-center sm:p-2 sm:px-5 sm:flex-row sm:justify-between sm:text-base">
      <p className=" text-white">
        &copy; {new Date().getFullYear()} | Mohammed Nazrul Haq Ansari
      </p>
      <div className="flex items-center justify-center">
        <a
          href="https://linkedin.com/in/mohammed-nazrul-haq-ansari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center mb-0 text-blue-600 sm:mb-0 hover:underline"
        >
          <Image
            src="./linkedin.svg"
            alt="LinkedIn"
            width={28.8}
            height={28.8}
            className="inline sm:h-[28.8px] sm:w-[28.8px] h-[21.6px] w-[21.6px]"
          />
        </a>
        <a
          href="https://github.com/MdNazrulHaqAnsari"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 mb-0 ml-2 text-white dark:invert sm:mb-0 hover:underline"
        >
          <Image
            src="./github.svg"
            alt="Github"
            width={25}
            height={25}
            className="inline sm:h-[25px] sm:w-[25px] h-[18.75px] w-[18.75px]"
          />
        </a>
      </div>
    </footer>
  );
}
