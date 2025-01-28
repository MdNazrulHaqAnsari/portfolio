"use client";
import { usePathname } from "next/navigation";
export default function NotFound404() {
  const path = usePathname();
  return (
    <div className="items-center justify-center text-center">
      <h1 className="text-2xl">
        <code className="text-red-500">404</code>: Page Not Found!
      </h1>
      <h2 className="text-xl">
        The requested path <code className="text-red-500">{path}</code> does not
        exists.
      </h2>
    </div>
  );
}
