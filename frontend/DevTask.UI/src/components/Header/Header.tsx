import * as S from './Header.styles'
import { Search } from "lucide-react";

export default function Header() {
  return (
    <S.Header>
      <S.SearchWrapper>
        <Search/>
        <S.SearchInput type="text" placeholder="Search or go to..." />
      </S.SearchWrapper>
    </S.Header>
  );
}