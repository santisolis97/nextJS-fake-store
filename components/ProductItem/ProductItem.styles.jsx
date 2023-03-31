import Image from 'next/image';
import styled from 'styled-components';
export const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const ProductImage = styled(Image)`
  width: 100%;
  height: 300px;
  object-fit: contain;
`;

export const ProductTitle = styled.h2`
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const ProductCategory = styled.span`
  font-size: 0.875rem;
  color: #9ca3af;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin-bottom: 0.5rem;
`;

export const ProductPrice = styled.span`
  font-size: 1.5rem;
  font-weight: 600;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

export const ProductRating = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

export const RatingCount = styled.span`
  margin-left: 0.5rem;
`;

export const ProductDescription = styled.p`
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
  text-align: center;
  color: #4b5563;
`;
