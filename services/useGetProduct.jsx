import { useQuery } from '@tanstack/react-query';
import { requestGet } from './baseRequests/requestGet';
const PRODUCTS_KEY = 'Products';
export const useGetProducts = () =>
  useQuery([PRODUCTS_KEY], () =>
    requestGet('https://fakestoreapi.com/products')
  );
