import Image from 'next/image';
import React from 'react';
import { getProduct, getProducts } from '../../../utils';
import AddToCart from '../../components/AddToCart';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: `${product.id}`,
  }));
}

const revalidate = 60 * 60; // every hour

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id, { next: { revalidate } });

  return (
    <div>
      <h1>{product.title}</h1>
      <div className='flex gap-10'>
        <span>{product.rating.rate}/5</span>
        <span>{product.rating.count} reviews</span>
      </div>
      <AddToCart product={product} className='my-4' />
      <Image src={product.image} alt={product.title} width={450} height={450} />
      <p className='max-w-sm'>{product.description}</p>
    </div>
  );
}
