import styled, { css } from "styled-components";
import { ReactComponent as User } from "../../assets/user-regular.svg";
import { ReactComponent as Bars } from "../../assets/bars-solid.svg";
import { ReactComponent as Xmark } from "../../assets/x-solid.svg";
import { useLocation } from "react-router-dom";
import { device } from "../../utils/media";
import { useState } from "react";

function HeaderMobile() {
  const [active, setActive] = useState(false);

  return (
    <>
      <HeaderMobileIcon onClick={() => setActive(!active)} />
      <HeaderMobileOverLay active={active} />
      <HeaderMobilMenu active={active}>
        <HeaderMobileXmark onClick={() => setActive(!active)} />
        <a href="/category">카테고리</a>
        <a href="/write">글쓰기</a>
        <a href="/signin">로그인</a>
      </HeaderMobilMenu>
    </>
  );
}

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

        <HeaderMobile />
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

  @media ${device.mobile} {
    font-size: 1.4rem;
  }
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

  @media ${device.mobile} {
    display: none;
  }
`;

const HeaderIcon = styled.span`
  display: inline-block;

  svg {
    width: 1.05rem;
    height: 1.05rem;
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const HeaderMobileIcon = styled(Bars)`
  width: 1.4rem;
  height: 1.4rem;
  fill: #333;
  display: none;
  @media ${device.mobile} {
    display: inline-block;
  }
`;

const HeaderMobileOverLay = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;

  ${(props) =>
    props.active &&
    css`
      width: 100%;
      z-index: 50;
      background: rgb(171, 171, 171);
      opacity: 0.5;
    `}
`;

const HeaderMobileXmark = styled(Xmark)`
  position: absolute;
  top: 18px;
  left: 18px;
  width: 1.6rem;
  height: 1.6rem;
`;

const HeaderMobilMenu = styled.ul`
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 100%;

  ${(props) =>
    props.active &&
    css`
      width: 80%;
      padding: 200px 24px;
      box-sizing: border-box;
      z-index: 100;
      background: #fff;
      opacity: 1;

      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: flex-end;

      a {
        margin: 18px 0;
        font-size: 1.4rem;
        font-weight: 300;
        color: #333;
      }
    `}
`;
