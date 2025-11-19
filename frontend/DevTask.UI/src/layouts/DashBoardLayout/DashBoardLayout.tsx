import * as S from './DashBoardLayout.styles'
import { Outlet } from "react-router-dom";
import Header from '../../components/Header';
import { HomeIcon, FolderArchive} from 'lucide-react'

export function DashboardLayout() {
  return (
    <>
      <Header/>
      <S.Container>
        <S.Sidebar>
          <h3 style={{ marginBottom: "1rem", color: "#fff" }}>DevTask</h3>
          <S.SidebarItem to="home"> <HomeIcon/> Home</S.SidebarItem>
          <S.SidebarItem to="projects"> <FolderArchive/> Projects</S.SidebarItem>
        </S.Sidebar>
        <S.Content>
          <Outlet />
        </S.Content>
      </S.Container>
    </>
  );
}
