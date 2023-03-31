import React from 'react';
import Image from 'next/image';
import {
  AddToCartButton,
  ProductCategory,
  ProductDescription,
  ProductDetails,
  ProductImage,
  ProductItemContainer,
  ProductPrice,
  ProductRating,
  ProductTitle,
  ProductWrapper,
  RatingCount,
} from '../ProductItem/ProductItem.styles';
import Link from 'next/link';

export const ProductItem = ({ product }) => {
  const { id, title, price, description, category, image, rating } = product;

  return (
    <ProductWrapper>
      <Link href={`/product/${id}`}>
        <ProductImage
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
        />
      </Link>
      <ProductTitle>{title}</ProductTitle>
      <ProductCategory>{category}</ProductCategory>
      <ProductPrice>${price.toFixed(2)}</ProductPrice>
      <ProductRating>
        <span>Rating:</span>
        <span>{rating.rate.toFixed(1)}</span>
        <RatingCount>({rating.count} reviews)</RatingCount>
      </ProductRating>
      <ProductDescription>{description}</ProductDescription>
    </ProductWrapper>
  );
};
