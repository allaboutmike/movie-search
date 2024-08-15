import Image from "next/image";
import { Fragment } from "react";
import { Movie } from "src/lib/movieApi";

type MovieDetailsViewProps = {
	movie: Movie | undefined,
	isLoading: boolean,
};

export function MovieDetailsView(props: Readonly<MovieDetailsViewProps>) {
	if (props.isLoading) {
		return <div>Loading...</div>;
	}

	if (!props.movie) {
		return (<h1>Nothing here :(</h1>);
	}

	const movie = props.movie;
	return (
		<Fragment>
			<h1>{movie.title}</h1>
			<Image src={movie.posterUrl} alt={movie.title} width={150} height={250} />
			TODO Put a bit of a list here.
		</Fragment>
	);
}
