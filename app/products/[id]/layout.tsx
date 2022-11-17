import Link from 'next/link';
import React from 'react';
import { ID } from '../../../types';
import { getRelatedProductsFromProductId } from '../../../utils';

async function PageLayout({ children, params }: { children: React.ReactNode; params: { id: ID } }) {
  const relatedProducts = await getRelatedProductsFromProductId(params.id);
  return (
    <div className='grid grid-cols-4 gap-6'>
      <section className='col-span-3 max-w-5xl'>{children}</section>
      <aside>
        <h3>Related Products</h3>
        <div className='grid'>
          {relatedProducts.map((product) => (
            <Link
              className='text-sm underline text-gray-900 hover:text-gray-700'
              key={product.id}
              href={`/products/${product.id}`}
            >
              {product.title}
            </Link>
          ))}
        </div>
      </aside>
    </div>
  );
}

export default PageLayout;
