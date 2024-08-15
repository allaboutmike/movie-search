import Link from "next/link";
import { MovieSummary } from "src/lib/movieApi";

type MovieRowProps = {
	movie: MovieSummary;
}

export function MovieRow(props: Readonly<MovieRowProps>) {
	return (<li>
		<Link href={{pathname: '/movie/' + props.movie.id + '/'}}>{props.movie.title}</Link>
	</li>);
}
