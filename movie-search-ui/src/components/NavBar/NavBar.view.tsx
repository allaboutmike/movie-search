import Link from "next/link";

export function NavBar() {
	return (<div>
		<Link href="/">[Browse all Movies]</Link>
		<Link href="/genres/">[Browse by genre]</Link>
	</div>);
}
