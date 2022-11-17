import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { getProductsByCategories } from '../../utils';

export default async function page() {
  const productsByCategory = await getProductsByCategories();
  return (
    <div className='max-w-5xl mx-auto'>
      {productsByCategory.map((category) => (
        <div key={category[0].title}>
          <h2 className='text-lg font-bold mb-2 capitalize'>{category[0].category}</h2>
          <div className='grid grid-flow-col  gap-6'>
            {category.map((product) => (
              <Link key={product.id} href={`/products/${product.id}`}>
                <div className='grid gap-2 items-center'>
                  <h3>{product.title}</h3>
                  <Image src={product.image} alt={product.title} width={250} height={250} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
