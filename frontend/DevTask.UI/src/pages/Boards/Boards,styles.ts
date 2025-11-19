import styled from "styled-components";

export const BoardPageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  position: relative;
  overflow: hidden;
`;

export const TopBar = styled.div`
  height: 55px;
  background-color: #1b1c22;
  border-bottom: 1px solid #2c2d35;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
`;

export const LeftGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const Dropdown = styled.select`
  background-color: #2a2b32;
  border: none;
  color: #e5e7eb;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
`;

export const Search = styled.div`
  display: flex;
  align-items: center;
  background-color: #2a2b32;
  border-radius: 8px;
  padding: 0.4rem 0.75rem;
  width: 260px;
  gap: 0.5rem;

  input {
    background: none;
    border: none;
    outline: none;
    color: #e5e7eb;
    width: 100%;
    font-size: 0.9rem;
  }
`;

export const NewListButton = styled.button`
  background-color: #2a2b32;
  border: none;
  color: #e5e7eb;
  padding: 0.5rem 0.75rem;
  border-radius: 6px;
  display: flex;
  align-items: center;
  gap: 0.4rem;
  cursor: pointer;
  transition: background 0.2s;
  height: fit-content;

  &:hover {
    background-color: #32333d;
  }

  svg {
    stroke-width: 2.5;
  }
`;

export const BoardContent = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  gap: 1rem;
  overflow-x: auto;
`;

export const NewListFormContainer = styled.div`
  width: 290px;
  flex-shrink: 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  background-color: #232327;
  border: 1px solid #3a3a3e;
  border-radius: 8px;
  padding: 1rem;
  height: fit-content;
`;

export const LabelSelect = styled.select`
  background-color: #2a2b32;
  border: 1px solid #444;
  color: #e5e7eb;
  padding: 0.4rem 0.75rem;
  border-radius: 6px;
  font-size: 0.9rem;
  width: 100%;
`;

export const FormActions = styled.div`
  display: flex;
  gap: 0.5rem;
`;

export const AddButton = styled.button`
  background-color: #1f618d;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;

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

  &:hover {
    background-color: #32333d;
  }
`;