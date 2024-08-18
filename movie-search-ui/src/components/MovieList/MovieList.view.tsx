import { Fragment } from 'react';
import { MovieRow } from '../MovieRow';
import { SearchResult } from 'src/lib/movieApi';

type MovieListProps = {
  search: string | undefined;
  genre: string | undefined;
  results: SearchResult | undefined;
  page: number;
  setPageNumber: (page: number) => void;
};

export function MovieListView(props: Readonly<MovieListProps>) {
  const hasMovies = (props.results?.data?.length ?? 0) > 0;

  const handlePrevPageClicked = () => {
    if (props.page > 1) {
      props.setPageNumber(props.page - 1);
    }
  };

  const handleNextPageClicked = () => {
    const totalPages = props.results?.totalPages;

    if (totalPages && props.page < totalPages) {
      props.setPageNumber(props.page + 1);
    }
  };

  if (!props.results) {
    return <div>Loading...</div>;
  }

  if (!hasMovies) {
    return <div>Nothing to show here... yet ;)</div>;
  }

  const title_msg =
    !props.search || props.search === '' ? 'all movies' : props.search;
  const genre_msg =
    !props.genre || props.genre === '' ? '' : ' in ' + props.genre;
  return (
    <Fragment>
      <h3 className="mb-4 font-bold text-lg">
        Showing results for {title_msg} {genre_msg}
      </h3>
      <ul className="divide-y divide-gray-500">
        {props.results.data.map((movie) => {
          return <MovieRow key={movie.id} movie={movie} />;
        })}
      </ul>
      <div
        id="button-row"
        className="flex justify-between items-center mx-auto max-w-screen-xl"
      >
        <button onClick={handlePrevPageClicked}>&lt;&lt;</button>
        <span>
          Page {props.page} of {props.results?.totalPages}{' '}
        </span>
        <button onClick={handleNextPageClicked}>&gt;&gt;</button>
      </div>
    </Fragment>
  );
}
