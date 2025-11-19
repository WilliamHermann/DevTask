import styled from "styled-components";

const Button = styled.button<{ variant?: "primary" | "secondary" }>`
  background: ${({ variant }) =>
    variant === "secondary" ? "#2c2c2c" : "#007bff"};
  color: white;
  border: none;
  padding: 0.6rem 1.2rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 500;
  transition: background 0.2s;

  &:hover {
    background: ${({ variant }) =>
      variant === "secondary" ? "#3a3a3a" : "#0062cc"};
  }
`;

export default Button;
