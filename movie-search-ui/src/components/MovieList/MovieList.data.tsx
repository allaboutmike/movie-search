import { MovieListView } from './MovieList.view';
import { useSearchParams } from 'next/navigation';

import { useState } from 'react';
import { useMovieSearch } from 'src/lib/useMovieSearch';

export function MovieList() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title');
  const genre = searchParams.get('genre');
  const [page, setPage] = useState(1);

  const [data, error] = useMovieSearch(title, genre, page);

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  return (
    <MovieListView
      results={data}
      error={error}
      search={title}
      page={page}
      genre={genre}
      setPageNumber={handleSetPage}
    />
  );
}
