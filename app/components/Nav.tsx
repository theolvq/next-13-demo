import Link from 'next/link';
import React from 'react';

export default function Nav() {
  return (
    <nav>
      <ul className='flex gap-10 py-6 max-w-5xl mx-auto'>
        <li>
          <Link href='/'>Home</Link>
        </li>
        <li>
          <Link href='/products'>Shop</Link>
        </li>
      </ul>
    </nav>
  );
}
