import React from 'react';
import { Category } from '../../../types';
import { getCategories } from '../../../utils';

export async function generateStaticParams() {
  const categories = await getCategories();

  return categories.map((category) => ({
    slug: category,
  }));
}

export default function Page({ params }: { params: { slug: Category } }) {
  return <div>{params.slug}</div>;
}
