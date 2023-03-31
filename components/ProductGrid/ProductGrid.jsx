import React from 'react';
import {
  GridContainer,
  GridWrapper,
  LoadingText,
  ProductGridContainer,
  Spinner,
} from '../ProductGrid/ProductGrid.styles';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductGrid = ({ products }) => {
  return !products ? (
    <GridContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </GridContainer>
  ) : (
    <GridWrapper>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </GridWrapper>
  );
};
