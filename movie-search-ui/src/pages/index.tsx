import type { NextPage } from 'next';
import { Fragment, Suspense } from 'react';
import { MovieList } from 'src/components/MovieList';
import { SearchBar } from 'src/components/SearchBar';

const Home: NextPage = () => {
  return (
    <Fragment>
			<SearchBar />
			<Suspense fallback={<div>Loading... </div>}>
				<MovieList />
			</Suspense>
    </Fragment>
  );
};

export default Home;
