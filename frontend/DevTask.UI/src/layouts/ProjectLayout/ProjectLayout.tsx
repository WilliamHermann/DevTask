import { Link, Outlet } from 'react-router-dom';
import Header from '../../components/Header';
import * as S from './ProjectLayout.styles'
import { ChevronDown, ChevronRight, Calendar, Users } from "lucide-react";
import { useState } from 'react';

export default function ProjectLayout() {
  const [openManage, setOpenManage] = useState(true);
  const [openPlan, setOpenPlan] = useState(true);
  
  return (
    <S.ProjectPageContainer>
      <Header /> 
      <S.MainContentRow>
      
        <S.Sidebar>
          <S.SectionTitle>Project</S.SectionTitle>

          <S.ProjectHeader>
            <S.ProjectName>Teste1</S.ProjectName>
          </S.ProjectHeader>

          <S.Dropdown>
            <S.DropdownButton onClick={() => setOpenManage(!openManage)}>
              <S.DropdownLabel>
                <Users size={16} />
                Manage
              </S.DropdownLabel>
              {openManage ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </S.DropdownButton>
            {openManage && (
              <S.DropdownContent>
                <S.DropdownItem>Labels</S.DropdownItem>
              </S.DropdownContent>
            )}
          </S.Dropdown>

          <S.Dropdown>
            <S.DropdownButton onClick={() => setOpenPlan(!openPlan)}>
              <S.DropdownLabel>
                <Calendar size={16} />
                Plan
              </S.DropdownLabel>
              {openPlan ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
            </S.DropdownButton>
            {openPlan && (
              <S.DropdownContent>
                <S.DropdownItem>Issues</S.DropdownItem>
                <Link to={"boards"}>
                  <S.DropdownItem active>Issue boards</S.DropdownItem>
                </Link>
              </S.DropdownContent>
            )}
          </S.Dropdown>
        </S.Sidebar>
          
        <S.PageContent>
          <Outlet /> 
        </S.PageContent>

      </S.MainContentRow>
    </S.ProjectPageContainer>
  );
}