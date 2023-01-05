import { NextSeo } from "next-seo";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <NextSeo title="Not Found" />
      <main className="bg-tca">
        <h1 className="text-6xl font-bold">Looks like you're lost.</h1>
        <p className="text-xl mt-2">
          Try going back to the{" "}
          <Link href="/" className="hover:underline">
            home page.
          </Link>
        </p>
      </main>
    </>
  );
}
