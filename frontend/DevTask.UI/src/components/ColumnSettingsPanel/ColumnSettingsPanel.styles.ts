import styled from "styled-components";

export const PanelOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 50;
`;

export const PanelContainer = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  background-color: #1b1c22;
  border-left: 1px solid #2c2d35;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  z-index: 51;
`;

export const PanelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  h3 {
    margin: 0;
    font-size: 1.1rem;
    color: #e5e7eb;
  }
`;

export const CloseButton = styled.button`
  background: transparent;
  border: none;
  color: #999;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;

  &:hover {
    background-color: #32333d;
    color: #fff;
  }
`;

export const RemoveButton = styled.button`
  background-color: #a83232;
  color: white;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  width: 100%;
  text-align: left;
  font-size: 0.9rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #c93f3f;
  }
`;

export const LabelSection = styled.div`
  margin-top: 1rem;
  h4 {
    color: #999;
    font-size: 0.8rem;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
  }
  span {
    background-color: #c93f3f;
    color: white;
    padding: 0.25rem 0.5rem;
    border-radius: 4px;
    font-size: 0.85rem;
  }
`;