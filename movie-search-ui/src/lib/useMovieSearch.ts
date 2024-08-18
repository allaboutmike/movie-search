import { useEffect, useState } from 'react';
import { search, SearchResult } from './movieApi';
import { useQueryClient } from '@tanstack/react-query';

export function useMovieSearch(
  title: string | undefined,
  genre: string | undefined,
  page: number
) {
  const [data, setData] = useState<SearchResult | undefined>(undefined);
  const queryClient = useQueryClient();

  useEffect(() => {
    const searchMovies = async (
      title: string | undefined,
      genre: string | undefined,
      page: number
    ) => {
      const data = await queryClient.fetchQuery({
        queryKey: ['search', title, genre],
        queryFn: async (): Promise<SearchResult> => search(title, genre, page),
      });
      setData(data);
    };
    searchMovies(title, genre, page);
  }, [title, genre, page, queryClient]);

  return data;
}
