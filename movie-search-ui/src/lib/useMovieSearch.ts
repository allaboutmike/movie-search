import { useEffect, useState } from 'react';
import { search, SearchResult } from './movieApi';
import { useQueryClient } from '@tanstack/react-query';

export function useMovieSearch(
  title: string | undefined,
  genre: string | undefined,
  page: number
): [SearchResult | undefined, string | undefined] {
  const [data, setData] = useState<SearchResult | undefined>(undefined);
  const [error, setError] = useState<string | undefined>(undefined);
  const queryClient = useQueryClient();

  useEffect(() => {
    const searchMovies = async (
      title: string | undefined,
      genre: string | undefined,
      page: number
    ) => {
      try {
        const data = await queryClient.fetchQuery({
          queryKey: ['search', title, genre],
          queryFn: async (): Promise<SearchResult> =>
            search(title, page, genre),
        });
        setData(data);
      } catch (e: any) {
        setError(e.message);
      }
    };
    searchMovies(title, genre, page);
  }, [title, genre, page, queryClient]);

  return [data, error];
}
