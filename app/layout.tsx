import Link from 'next/link';
import './globals.css';
import { Open_Sans } from '@next/font/google';
import { getCategories } from '../utils';
import Nav from './components/Nav';

const openSans = Open_Sans({
  variable: '--font-open-sans',
});

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const categories = await getCategories();
  return (
    <html lang='en' className={openSans.variable}>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
        <header>
          <Nav />
        </header>
        <main className='bg-gray-100 p-12 '>{children}</main>
      </body>
    </html>
  );
}
