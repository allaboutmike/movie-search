import { useState } from "react";
import { useRouter } from 'next/router'
import { useSearchParams } from "next/navigation";

export function SearchBar() {
	const router = useRouter();
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');
	const [searchText, setSearchText] = useState('');

	const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
		setSearchText(e.currentTarget.value);
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		const searchParams = new URLSearchParams();
		searchParams.set('title', searchText);
		if (genre !== null) {
			searchParams.set('genre', genre);
		}
		router.push('/?' + searchParams.toString(), undefined, { shallow: true });
	}

	return (
		<form className="mt-4" onSubmit={handleSubmit}>
			<div className="grid grid-cols-5 mb-6 gap-6 w-full">
				<input className="border border-gray-600 rounded w-full col-span-4" type="text" name="title" placeholder="Search" value={searchText} onChange={handleSearchChange}/>
				<div>
					<button type="submit" className="bg-gray-100 hover:bg-gray-300 rounded py-1 px-4">Search</button>
				</div>
			</div>
		</form>
	);
};
