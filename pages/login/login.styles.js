import styled from 'styled-components';
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled.input`
  padding: 1rem;
  font-size: 1rem;
  border: none;
  border-bottom: 2px solid #ccc;
  background-color: transparent;
  transition: border-bottom-color 0.2s ease-in-out;

  &:focus {
    outline: none;
    border-bottom-color: #4caf50;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 1rem;
  font-weight: bold;
  color: #333;
`;

export const Error = styled.span`
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 0.5rem;
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: #388e3c;
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.p`
  color: #f44336;
  font-size: 0.875rem;
  margin-top: 1rem;
  text-align: center;
`;
