import { render, screen, fireEvent } from '@testing-library/react';

import { MovieList } from './MovieList.data';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockImplementation((key: string) => {
      if (key === 'genre') {
        return null;
      } else if (key === 'title') {
        return 'Space';
      }
    }),
  })),
}));

jest.mock('src/lib/useMovieSearch', () => ({
  useMovieSearch: jest
    .fn()
    .mockReturnValue([
      {
        data: [{ title: 'Spaceballs', posterUrl: '', rating: 'PG', id: '123' }],
        totalPages: 1,
      },
      null,
    ]),
}));

describe('MovieList', () => {
  describe('With results', () => {
    it('should render with results', () => {
      render(
        <QueryClientProvider client={new QueryClient()}>
          <MovieList />
        </QueryClientProvider>
      );

      const title = screen.getByTestId('123');
      expect(title).toHaveTextContent('Spaceballs');
    });
  });
});
