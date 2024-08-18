import Link from 'next/link';
import { Fragment } from 'react';
import { NavBar } from '../NavBar';

type LayoutProps = {
  children: JSX.Element;
};

export default function Layout({ children }: Readonly<LayoutProps>) {
  return (
    <Fragment>
      <header className="">
        <nav className="bg-white text-gray-700 border-gray-200 px-4 py-2.5 drop-shadow-xl">
          <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
            <div id="left_content" className="">
              <Link href="/">Movie Search</Link>
            </div>
            <div id="center_content" className=""></div>
            <div id="right_content" className="">
              A demo app by Mike B
            </div>
          </div>
        </nav>
      </header>
      <main className="grid grid-cols-6 gap-2 h-screen">
        <div id="left-gap" className=""></div>
        <div id="content" className="col-span-4">
          <NavBar />
          {children}
        </div>
        <div id="right-gap" className=""></div>
      </main>
    </Fragment>
  );
}
