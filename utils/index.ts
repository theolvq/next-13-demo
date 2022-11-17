import { Category, Product } from '../types';

const API_URL = process.env.API_URL;

export async function fetchApi(path: string, options?: RequestInit) {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      ...options,
    });

    return await res.json();
  } catch (error) {
    console.error('Error fetching API: ', error);
  }
}

export async function getProducts({
  limit,
  category,
}: {
  limit?: number;
  category?: Category;
}): Promise<Product[]> {
  const basePath = '/products';

  if (limit) {
    const searchParam = `limit=${limit}`;
    return await fetchApi(`${basePath}/${searchParam}`);
  }

  if (category) {
    return await fetchApi(`${basePath}/${category}`);
  }

  return await fetchApi(basePath);
}

export async function getProduct(id: string | number): Promise<Product> {
  return await fetchApi(`/products/${id}`);
}

export async function getCategories(): Promise<Category[]> {
  return await fetchApi('/products/categories');
}

export async function getCategory(category: Category): Promise<Category> {
  return await fetchApi(`/products/category/${category}`);
}
