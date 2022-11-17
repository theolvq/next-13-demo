import React from 'react';
import { getProduct, getProducts } from '../../../utils';

export async function generateStaticParams() {
  const products = await getProducts();
  return products.map((product) => ({
    id: `${product.id}`,
  }));
}

export default async function Page({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  );
}
