import { useQuery } from '@tanstack/react-query';
import { getMovie, Movie } from 'src/lib/movieApi';
import { MovieDetailsView } from './MovieDetails.view';

type MovieDetailsDataProps = {
  id: string;
};

export function MovieDetails(props: Readonly<MovieDetailsDataProps>) {
  const { data, isLoading, error } = useQuery<Movie, Error>({
    queryKey: ['movie', props.id],
    queryFn: async () => getMovie(props.id),
  });

  return <MovieDetailsView movie={data} isLoading={isLoading} error={error} />;
}
