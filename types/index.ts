export interface Product {
  id: ID;
  title: string;
  price: number;
  description: string;
  category: Category;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export type Category = 'electronics' | 'jewelery' | "men's clothing" | "women's clothing";

export type ID = string | number;
