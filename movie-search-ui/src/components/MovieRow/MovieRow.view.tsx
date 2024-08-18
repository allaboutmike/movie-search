import Link from 'next/link';
import Image from 'next/image';
import { MovieSummary } from 'src/lib/movieApi';

type MovieRowProps = {
  movie: MovieSummary;
};

export function MovieRow(props: Readonly<MovieRowProps>) {
  return (
    <li className="py-3 sm:py-4">
      <Link href={{ pathname: '/movie/' + props.movie.id + '/' }}>
        <div className="flex items-center space-x-4 rtl:space-x-reverse">
          <div className="flex-shrink-0">
            <Image
              src={props.movie.posterUrl}
              alt={props.movie.title}
              width={75}
              height={100}
            />
          </div>
          <div className="flex-1 min-w-0">
            <p
              className="text-sm font-medium truncate"
              data-testid={props.movie.id}
            >
              {props.movie.title}
            </p>
            <p className="text-sm text-gray-600">
              Rating: {props.movie.rating}
            </p>
          </div>
        </div>
      </Link>
    </li>
  );
}
