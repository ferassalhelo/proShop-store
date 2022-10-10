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
  reviews: Array<{
    _id: string;
    name: string;
    rating: number;
    comment: string;
    user: string;
    createdAt: string;
    updatedAt: string;
  }>;
  __v: number;
  createdAt: string;
  updatedAt: string;
}
