import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { MovieDetails } from 'src/components/MovieDetails';

const MoviePage: NextPage = () => {
  const router = useRouter();
  const id = router.query.id as string;

  return <MovieDetails id={id} />;
};

export default MoviePage;
