export type Service = {
  _id?: string;
  name?: string;
  description?: string;
  process?: string;
  originalPrice?: number;
  discountedPrice?: number;
  duration?: string;
  image?: string;
  subservices?: any[]; 
  createdAt?: string;
  __v?: number;
};