import React, { useState } from 'react';
import {
  GridContainer,
  GridWrapper,
  LoadingText,
  ProductGridContainer,
  ProductSearch,
  Spinner,
} from '../ProductGrid/ProductGrid.styles';
import { ProductItem } from '../ProductItem/ProductItem';

export const ProductGrid = ({ products }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return !products ? (
    <GridContainer>
      <Spinner />
      <LoadingText>Loading...</LoadingText>
    </GridContainer>
  ) : (
    <>
      {' '}
      <ProductSearch>
        <input
          type="text"
          placeholder="Search by title"
          value={searchTerm}
          onChange={handleSearch}
        />
      </ProductSearch>
      <GridWrapper>
        {(filteredProducts ?? products).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </GridWrapper>
    </>
  );
};
