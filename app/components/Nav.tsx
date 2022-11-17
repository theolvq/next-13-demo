import Link from 'next/link';
import React, { FC } from 'react';
import { Category } from '../../types';

interface Props {
  categories: Category[];
}

const Nav: FC<Props> = ({ categories }) => {
  return (
    <nav>
      <ul>
        {categories.map((category) => (
          <Link key={category} href={`/category/${category}`}>
            {category}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
