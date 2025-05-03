import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col items-center py-6">
      <span className="text-4xl mb-2">📚✨</span>
      <Image src="/book.svg" alt="Book icon" width={48} height={48} className="mb-2" />
      <h1 className="text-2xl font-bold text-center">Track, Plan & Reflect on Your Reading</h1>
    </header>
  );
}