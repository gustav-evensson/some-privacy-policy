import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Link href="/some-privacy-policy.pdf" className="border border-foreground px-4 py-2 rounded-lg">Privacy Policy</Link>
    </div>
  );
}
