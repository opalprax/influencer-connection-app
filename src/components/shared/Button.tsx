import styled from 'styled-components';

export const Button = styled.button`
  background: #2196f3;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #1976d2;
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(0);
  }
`; 