import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment, Suspense } from 'react';
import { MovieList } from 'src/components/MovieList';
import { NavBar } from 'src/components/NavBar/NavBar.view';
import { SearchBar } from 'src/components/SearchBar';

const Home: NextPage = () => {
  return (
    <Fragment>
      <Head>
        <title>Movie Search</title>
        <meta name="description" content="Generated using starter.dev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="w-3/5 my-5 mx-auto text-center">
        <h1 className="bg-blue-600 text-white text-2xl font-semibold p-4 rounded">
          Yet another movie searching UI
        </h1>
				<NavBar />
				<SearchBar />
				<Suspense fallback={<div>Loading... </div>}>
					<MovieList />
				</Suspense>
      </header>
    </Fragment>
  );
};

export default Home;
