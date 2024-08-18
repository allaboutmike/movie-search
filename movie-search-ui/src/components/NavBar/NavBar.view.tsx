import Link from 'next/link';

export function NavBar() {
  return (
    <div className="my-4 text-center">
      <Link href="/">[Browse all movies]</Link>
      <Link href="/genres/">[Browse by genre]</Link>
    </div>
  );
}
