import { useLocation, useParams } from "react-router-dom";
import styled from "styled-components";

export default function FeedCategory() {
  const { pathname } = useLocation();
  const { categoryId } = useParams();

  return (
    <StFeedCategory>
      <FeedCategoryMenu>
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
      </FeedCategoryMenu>

      <FeedCategoryButton>글 남기기</FeedCategoryButton>
    </StFeedCategory>
  );
}

const StFeedCategory = styled.div`
  width: 200px;
`;

const FeedCategoryMenu = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;

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

const FeedCategoryButton = styled.button`
  display: inline-block;
  width: 100%;
  height: 48px;
  padding: 0px 16px;
  margin: 24px 0;
  box-sizing: border-box;
  border: none;
  border-radius: 8px;
  outline: none;
  font-family: "Noto Sans KR";
  font-style: normal;
  font-size: 16px;
  font-weight: 750;
  line-height: 48px;
  color: #fff;
  background: #ffa500;
`;
