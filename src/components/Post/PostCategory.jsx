import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/media";

export default function PostCategory() {
  const { pathname } = useLocation();
  const { categoryId } = useParams();

  return (
    <StPostCategory>
      <PostCategoryMenu>
        <a
          href={"/feed/best/" + categoryId}
          className={pathname.includes("best") ? "active" : null}
        >
          인기 글
        </a>
        <a
          href={"/feed/new/" + categoryId}
          className={pathname.includes("new") ? "active" : null}
        >
          최신 글
        </a>
        <a>나의 활동</a>
      </PostCategoryMenu>
    </StPostCategory>
  );
}

const StPostCategory = styled.div`
  width: 200px;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;

const PostCategoryMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

  @media ${device.tablet} {
    flex-direction: row;

    a {
      text-align: center;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: rgb(157, 167, 174);
  }

  @media ${device.mobile} {
    flex-direction: row;

    a {
      text-align: center;
    }
  }

  a {
    display: inline-block;
    width: 100%;
    height: 48px;
    padding: 0px 16px;
    box-sizing: border-box;
    border-radius: 8px;
    font-family: "Noto Sans KR";
    font-style: normal;
    font-size: 16px;
    font-weight: 400;
    line-height: 48px;
    color: rgb(157, 167, 174);
  }

  .active {
    font-weight: 700;
    background: rgb(242, 246, 248);
    color: rgb(20, 22, 23);
  }
`;
