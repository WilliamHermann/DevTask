import styled from "styled-components";

export const ColumnContainer = styled.div`
  width: 290px;
  flex-shrink: 0;
  background-color: #1b1c22;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-height: 100%;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.75rem;

  h2 {
    font-size: 1rem;
    color: #f3f4f6;
    margin: 0;
  }
`;

export const ActionsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  border: none;
  border-radius: 4px;
  padding: 4px;
  cursor: pointer;
  color: #9a9a9a;
  transition: background-color 0.2s, color 0.2s;

  &:hover {
    background-color: #32333d;
    color: #ffffff;
  }
`;

export const TaskList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  overflow-y: auto;
  flex: 1;
  min-height: 0;
  padding: 0 0.75rem 0.75rem;
`;

export const Card = styled.div`
  background-color: #2a2b32;
  border-radius: 6px;
  padding: 0.75rem;
  font-size: 0.9rem;
  cursor: grab;
  transition: background 0.2s;

  &:hover {
    background-color: #32333d;
  }
`;