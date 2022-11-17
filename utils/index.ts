import { Category, ID, Product } from '../types';

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
} = {}): Promise<Product[]> {
  const basePath = '/products';

  if (limit) {
    const searchParam = `limit=${limit}`;
    return await fetchApi(`${basePath}/${searchParam}`);
  }

  if (category) {
    const encodedCategory = encodeURIComponent(category);
    const path = `${basePath}/category/${encodedCategory}`;
    return await fetchApi(path);
  }

  return await fetchApi(basePath);
}

export async function getProduct(id: ID): Promise<Product> {
  return await fetchApi(`/products/${id}`);
}

export async function getCategories(): Promise<Category[]> {
  return await fetchApi('/products/categories');
}

export async function getCategory(category: Category): Promise<Category> {
  return await fetchApi(`/products/category/${category}`);
}

export async function getRelatedProductsFromProductId(id: ID) {
  const product = await getProduct(id);
  const { category } = product;
  const relatedProducts = await getProducts({ category });
  return relatedProducts.filter((product) => product.id !== id);
}

export async function getProductsByCategories() {
  const categories = await getCategories();
  let productsByCategory = [];
  for (const category of categories) {
    const products = await getProducts({ category });
    productsByCategory.push(products);
  }
  return productsByCategory;
}
