export interface ReviewType {
  comment: string;
  createdAt: string;
  name: string;
  rating: 5;
  updatedAt: string;
  user: string;
  _id: string;
}

export default interface ProductType {
  images: Array<string>;
  colors: Array<string>;
  categories: Array<string>;
  rating: number;
  numReviews: number;
  price: number;
  discount: number;
  countInStock: number;
  _id: string;
  name: string;
  description: string;
  brand: string;
  user: string;
  reviews: Array<ReviewType>;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
