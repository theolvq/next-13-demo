import React from 'react';
import { ID } from '../../../types';
import { getProduct } from '../../../utils';

export default async function Head({ params }: { params: { id: ID } }) {
  const product = await getProduct(params.id);
  return (
    <>
      <title>{product.title}</title>
    </>
  );
}
