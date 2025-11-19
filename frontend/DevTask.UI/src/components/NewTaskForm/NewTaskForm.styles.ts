import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #2a2b32;
  border-radius: 6px;
  padding: 0.75rem;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const TitleInput = styled.input`
  background-color: #1b1c22;
  border: 1px solid #3a3a3e;
  border-radius: 4px;
  padding: 0.5rem 0.75rem;
  color: #e5e7eb;
  font-size: 0.9rem;
  width: 100%;
  box-sizing: border-box;

  &::placeholder {
    color: #777;
  }
  &:focus {
    outline: none;
    border-color: #1f618d;
  }
`;

export const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
`;

export const CreateButton = styled.button`
  background-color: #1f618d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.85rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2980b9;
  }
`;

export const CancelButton = styled.button`
  background-color: transparent;
  color: #999;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-size: 0.85rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #32333d;
    color: #ccc;
  }
`;