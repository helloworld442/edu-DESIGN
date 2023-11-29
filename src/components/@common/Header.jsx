import styled from "styled-components";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();
  const path = usePathname(pathname);

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
          <a href="/write" className={pathname === "/write" ? "active" : null}>
            글 남기기
          </a>
          <a>소개글</a>
          <a>문의하기</a>
        </HeaderMenu>

        <HeaderIcon>
          <User />
        </HeaderIcon>
      </HeaderNav>

      <HeaderPath>{path}</HeaderPath>
    </StHeader>
  );
}

function usePathname(pathname) {
  if (pathname.includes("category")) {
    return "홈  >  카테고리";
  }

  if (pathname.includes("feed")) {
    return "홈  >  카테고리  >  커뮤니티";
  }

  if (pathname.includes("write")) {
    return "홈  >  글 남기기";
  }
}

const StHeader = styled.header`
  width: 100%;
  height: auto;
`;

const HeaderNav = styled.nav`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderPath = styled.pre`
  font-size: 0.725rem;
  font-weight: 400;
  font-family: "Noto Sans KR";
  color: rgb(179, 173, 178);
  text-align: right;
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
  font-family: "Noto Sans KR";
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
