import { Fragment } from 'react';
import { MovieRow } from '../MovieRow';
import { SearchResult } from 'src/lib/movieApi';

type MovieListProps = {
	search: string | undefined,
  results: SearchResult | undefined,
	page: number,
	setPageNumber: (page: number)=>void,
};

export function MovieListView(props: Readonly<MovieListProps>) {
	const hasMovies = (props.results?.data?.length ?? 0) > 0;

	const handlePrevPageClicked = () => {
		if (props.page > 1) {
			props.setPageNumber(props.page - 1);
		}
	}

	const handleNextPageClicked = () => {
		const totalPages = props.results?.totalPages;

		if (totalPages && props.page < totalPages) {
			props.setPageNumber(props.page + 1);
		}
	}

	if (!props.results) {
		return <div>Loading...</div>
	}

	if (!hasMovies) {
		return <div>Nothing to show here... yet ;)</div>
	}

	const message = (!props.search || props.search === '') ? 'all movies' : props.search;
	return (
    <Fragment>
			<h3>Showing results for {message}</h3>
			<ul>
				{props.results.data.map((movie) => {
					return <MovieRow key={movie.id} movie={movie} />;
				})}
			</ul>
			<div id="button-row">
				<button onClick={handlePrevPageClicked}>&lt;&lt;</button>
				<span>Page {props.page} of {props.results?.totalPages} </span>
				<button onClick={handleNextPageClicked}>&gt;&gt;</button>
			</div>
		</Fragment>
  );
}
