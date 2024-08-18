import { render, screen, fireEvent } from '@testing-library/react';

import { SearchBar } from './SearchBar';
import { useRouter } from 'next/router';

jest.mock('next/router', () => ({ useRouter: jest.fn() }));
const push = jest.fn();
(useRouter as jest.Mock).mockImplementation(() => ({
  push,
}));

jest.mock('next/navigation', () => ({
  ...jest.requireActual('next/navigation'),
  useSearchParams: jest.fn().mockImplementation(() => ({
    get: jest.fn().mockReturnValue(null),
  })),
}));

describe('SearchBar', () => {
  it('should have no import set', () => {
    render(<SearchBar />);

    const form = screen.getByTestId('search-form');
    expect(form).toHaveFormValues({
      title: '',
    });
  });

  it('should submit the correct text', () => {
    render(<SearchBar />);

    const input = screen.getByTestId('search-input');
    fireEvent.change(input, { target: { value: 'Spaceballs' } });
    const form = screen.getByTestId('search-form');
    expect(form).toHaveFormValues({ title: 'Spaceballs' });

    fireEvent.submit(form);
    expect(push).toHaveBeenCalledWith('/?title=Spaceballs', undefined, {
      shallow: true,
    });
  });
});
