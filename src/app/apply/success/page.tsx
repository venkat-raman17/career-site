import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <div className="flex flex-col items-center justify-center min-h-screen gap-8">
          <h1 className="text-3xl font-bold mb-8">Welcome to Career Site</h1>
          <div className="flex flex-col gap-6 w-full max-w-xs">
            <Link
              href="/jobs"
              className="rounded-lg bg-blue-600 text-white py-4 px-6 text-center text-lg font-semibold hover:bg-blue-700 transition"
            >
              New User? Search and apply jobs
            </Link>
            <Link
              href="/login"
              className="rounded-lg border border-blue-600 text-blue-600 py-4 px-6 text-center text-lg font-semibold hover:bg-blue-50 transition"
            >
              Existing User? Login
            </Link>
          </div>
        </div>
      </main>
      <footer className="flex flex-col gap-4 row-start-3 items-center sm:items-start">
        <div className="flex gap-4">
          <Link href="/about" className="text-blue-600 hover:underline">
            About Us
          </Link>
        </div>
      </footer>
    </div>
  );
}