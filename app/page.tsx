import Image from 'next/image';
import Link from 'next/link';
import { getCategories, getProducts, getProductsByCategories } from '../utils';

export default async function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam facilis deleniti aliquid,
        perspiciatis eveniet neque quos consequuntur natus odit rerum temporibus quibusdam sequi vel
        ab et. Ipsum repellat vel et.
      </p>
    </div>
  );
}
