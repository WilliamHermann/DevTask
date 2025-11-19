import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  height: 100vh;
  background-color: #1b1c21;
`;

export const Sidebar = styled.aside`
  width: 220px;
  background-color: #2d2e34;
  border-right: 1px solid #2a2b30;
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

export const SidebarItem = styled(NavLink)`
  color: #aaa;
  padding: 0.6rem 0.8rem;
  border-radius: 6px;
  font-size: 0.95rem;
  transition: background 0.2s, color 0.2s;

  &.active {
    background-color: #2d2e33;
    color: #fff;
  }

  &:hover {
    background-color: #2a2b30;
    color: #fff;
  }
`;

export const Content = styled.main`
  flex: 1;
  padding: 1.5rem;
  overflow-y: auto;
`;