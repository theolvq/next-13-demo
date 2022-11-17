'use client';

import React from 'react';
import { Product } from '../../types';

export default function AddToCart({
  product,
  className,
}: {
  product: Product;
  className?: string;
}) {
  const handleClick = () => {
    alert(`${product.title} was added to cart`);
  };

  return (
    <button
      className={`px-8 py-4 bg-blue-600 text-gray-100 rounded-lg font-bold hover:bg-blue-700 ${className}`}
      onClick={handleClick}
    >
      Add To Cart
    </button>
  );
}
