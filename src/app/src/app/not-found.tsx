import Link from "next/link";

export default function NotFound() {
  return (
    <div className="grid min-h-screen place-items-center">
      <div className="text-center">
        <p className="text-6xl">404</p>
        <p className="mt-2">Page not found (｡•́︿•̀｡)</p>
        <Link href="/" className="mt-6 inline-block bg-mint px-3 py-1 text-white">
          Back home
        </Link>
      </div>
    </div>
  );
}
