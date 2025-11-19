import styled from "styled-components";

export const ProjectPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100dvh;
  width: 100vw;
  overflow: hidden;
  background-color: #0e0f14;
  color: #e5e7eb;
`;

export const MainContentRow = styled.div`
  display: flex;
  flex: 1;
  min-height: 0;
`;

export const PageContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
`;

export const Sidebar = styled.aside`
  width: 250px;
  background-color: #1b1c22;
  border-right: 1px solid #2c2d35;
  padding: 1rem;
  flex-shrink: 0;
  overflow-y: auto;
`;

export const SectionTitle = styled.h2`
  font-size: 13px;
  font-weight: 600;
  color: #9ca3af;
  margin-bottom: 12px;
`;

export const ProjectHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 16px;
`;

export const ProjectName = styled.span`
  font-size: 14px;
  font-weight: 500;
`;

export const Badge = styled.span`
  margin-left: auto;
  font-size: 11px;
  background-color: #9333ea;
  color: white;
  padding: 2px 6px;
  border-radius: 6px;
`;

export const Dropdown = styled.div`
  margin-top: 8px;
`;

export const DropdownButton = styled.button`
  width: 100%;
  background: none;
  border: none;
  color: inherit;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  padding: 8px 6px;
  border-radius: 6px;
  transition: background 0.2s ease;

  &:hover {
    background-color: #2a2b30;
    color: white;
  }
`;

export const DropdownLabel = styled.span`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
`;

export const DropdownContent = styled.div`
  margin-left: 24px;
  margin-top: 6px;
  display: flex;
  flex-direction: column;
`;

export const DropdownItem = styled.a<{ active?: boolean }>`
  font-size: 14px;
  color: ${({ active }) => (active ? "#fff" : "#c2c2c2")};
  background-color: ${({ active }) => (active ? "#2f3642" : "transparent")};
  padding: 6px 8px;
  border-radius: 6px;
  text-decoration: none;
  cursor: pointer;
  transition: background 0.2s ease;

  &:hover {
    color: #fff;
    background-color: #2a2b30;
  }
`;