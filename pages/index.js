import React, { useEffect } from 'react';

import { ProductGrid } from '../components/ProductGrid/ProductGrid';
import { PageWrapper, Title } from '../index.styles';
import { useGetProducts } from '../services/useGetProduct';

export default function About() {
  const { data } = useGetProducts();
  return (
    data && (
      <PageWrapper>
        <Title>Our Products</Title>
        <ProductGrid products={data} />
      </PageWrapper>
    )
  );
}
