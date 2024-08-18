import { MovieListView } from './MovieList.view';
import { useSearchParams } from 'next/navigation';

import { useState } from 'react';
import { useMovieSearch } from 'src/lib/useMovieSearch';

export function MovieList() {
  const searchParams = useSearchParams();
  const title = searchParams.get('title') ?? undefined;
  const genre = searchParams.get('genre') ?? undefined;
  const [page, setPage] = useState(1);

  const data = useMovieSearch(title, genre, page);

  const handleSetPage = (page: number) => {
    setPage(page);
  };

  return (
    <MovieListView
      results={data}
      search={title}
      page={page}
      genre={genre}
      setPageNumber={handleSetPage}
    />
  );
}
