import Link from "next/link"
import { Fragment } from "react"
import { Genre } from "src/lib/movieApi"

type GenreListViewProps = {
	genres: Array<Genre>,
	loading: boolean,
}

export function GenreListView(props: Readonly<GenreListViewProps>) {
	if (props.loading) {
		return <div>Loading...</div>
	}
	return (
		<Fragment>
			<h1 className="my-4 font-bold text-lg">All Genres</h1>
			<ul>
			{props.genres.map((genre) => {
				return <li key={genre.id}><Link href={{pathname: '/', query: { genre: genre.title }}}>{genre.title} ({genre.movies.length})</Link></li>
			})}
			</ul>
		</Fragment>
	)
}
