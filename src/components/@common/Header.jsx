import styled from "styled-components";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <StHeader>
      <HeaderNav>
        <HeaderLogo href="/">오소리</HeaderLogo>

        <HeaderMenu>
          <a
            href="/category"
            className={pathname === "/category" ? "active" : null}
          >
            카테고리
          </a>
          <a>소개하기</a>
          <a>문의하기</a>
        </HeaderMenu>

        <HeaderIcon>
          <User />
        </HeaderIcon>
      </HeaderNav>
    </StHeader>
  );
}

const StHeader = styled.header`
  width: 100%;
  height: 80px;
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogo = styled.a`
  font-size: 1.25rem;
  font-weight: 300;
  color: #ffa500;
  cursor: pointer;
`;

const HeaderMenu = styled.ul`
  display: flex;
  gap: 36px;
  font-size: 0.825rem;
  font-weight: 550;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  transition: all 0.5s ease-in-out;
  cursor: pointer;

  .active {
    color: #ffa500;
  }
`;

const HeaderIcon = styled.span`
  display: inline-block;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }
`;