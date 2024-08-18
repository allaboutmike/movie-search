import Image from 'next/image';
import Link from 'next/link';
import { Fragment } from 'react';
import { Movie } from 'src/lib/movieApi';

type MovieDetailsViewProps = {
  movie: Movie | undefined;
  isLoading: boolean;
  error: Error | null;
};

export function MovieDetailsView(props: Readonly<MovieDetailsViewProps>) {
  if (props.isLoading) {
    return <div>Loading...</div>;
  }

  if (!props.movie) {
    if (props.error) {
      return <div> Oh no! An error when getting movie details </div>;
    }
    return <h1>Nothing here :(</h1>;
  }

  const movie = props.movie;

  return (
    <Fragment>
      <h1 className="text-xl font-bold my-2">{movie.title}</h1>
      <div className="grid grid-cols-3">
        <div id="poster">
          <Image
            src={movie.posterUrl}
            alt={movie.title}
            width={200}
            height={325}
          />
        </div>
        <div id="details" className="col-span-2">
          <ul>
            <li>
              <span className="text-gray-700">Duration: </span>
              <span>{movie.duration}</span>
            </li>
            <li>
              <span className="text-gray-700">Published: </span>
              <span>{movie.datePublished}</span>
            </li>
            <li>
              <span className="text-gray-700">Genres: </span>
              {movie.genres.map((genre) => (
                <Link
                  className="pr-1 text-blue-500 hover:underline"
                  key={genre.id}
                  href={'/?genre=' + genre.title}
                >
                  {genre.title},
                </Link>
              ))}
            </li>
            <li>
              <span className="text-gray-700">Rating: </span>
              <span>
                {movie.rating} (Best: {movie.bestRating}; Worst:{' '}
                {movie.worstRating})
              </span>
            </li>
            <li>
              <span className="text-gray-700">Directors: </span>
              <span>{movie.directors?.join(', ')}</span>
            </li>
            <li>
              <span className="text-gray-700">Actors: </span>
              <span>{movie.mainActors?.join(', ')}</span>
            </li>
            <li>
              <span className="text-gray-700">Writers: </span>
              <span>{movie.writers?.join(', ')}</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="pt-3">
        <span className="font-bold">Summary: </span> {movie.summary}
      </p>
    </Fragment>
  );
}
