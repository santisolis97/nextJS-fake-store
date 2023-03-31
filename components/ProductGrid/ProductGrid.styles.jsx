import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.div`
  display: inline-block;
  width: 32px;
  height: 32px;
  &:after {
    content: ' ';
    display: block;
    width: 24px;
    height: 24px;
    margin: 4px;
    border-radius: 50%;
    border: 6px solid #ccc;
    border-color: #ccc transparent #ccc transparent;
    animation: ${spin} 1.2s linear infinite;
  }
`;

export const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 1rem;
  margin-top: 2rem;
  justify-items: center;
  align-items: start;
  min-height: 300px;
`;

export const GridContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  gap:15px;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.p`
  margin-left: 0.5rem;
`;
