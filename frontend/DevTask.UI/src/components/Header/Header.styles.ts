import styled from "styled-components";

export const Header = styled.div`
  background: #2d2e34;
  padding: 1rem;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

export const SearchInput = styled.input`
  background-color: #3a3a3a;
  color: #eee;
  border: 1px solid #555;
  border-radius: 6px;
  padding: 8px 12px 8px 35px; 
  font-size: 14px;
  
  outline: none;
  transition: all 0.2s ease-in-out;
  width: 350px;

  &::placeholder {
    color: #999;
  }

  &:focus {
    border-color: #777;
    background-color: #404040;
  }
`;