import styled from "styled-components";

export default function FeedItem({ feed }) {
  return (
    <StFeedItem>
      <FeedItemTitle>{feed.title}</FeedItemTitle>
      <FeedItemContent>{feed.question}</FeedItemContent>
      <FeedItemUser>
        <span></span>
        <h4>김민승</h4>
        <h5>2023.08.12</h5>
      </FeedItemUser>
      <FeedItemInfo>
        <h6>
          추천 <span>1</span>
        </h6>
        <h6>
          조회 <span>2</span>
        </h6>
      </FeedItemInfo>
    </StFeedItem>
  );
}

const StFeedItem = styled.li`
  position: relative;
  width: 100%;
  height: 210px;
  padding: 36px 0;
  box-sizing: border-box;
  border-bottom: 1px solid rgb(228, 235, 240);
  margin: 24px 0;
`;

const FeedItemTitle = styled.h3`
  margin-bottom: 6px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 650;
  font-size: 16px;
  color: rgb(20, 22, 23);
`;

const FeedItemContent = styled.h5`
  width: 88%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 0.825rem;
  color: rgb(95, 102, 107);
  line-height: 1.25rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

const FeedItemUser = styled.div`
  position: absolute;
  bottom: 30px;
  display: flex;
  align-items: center;

  span {
    display: inline-block;
    width: 26px;
    height: 26px;
    margin-right: 8px;
    border-radius: 100%;
    background: #d9d9d9;
  }

  h4 {
    font-size: 0.75rem;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  }

  h5 {
    padding-left: 6px;
    margin-left: 6px;
    border-left: 1.5px solid rgb(157, 167, 174);
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(157, 167, 174);
  }
`;

const FeedItemInfo = styled.div`
  position: absolute;
  bottom: 36px;
  right: 0;
  display: flex;
  align-items: center;
  gap: 12px;

  h6 {
    font-size: 0.725rem;
    font-weight: 500;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: rgb(157, 167, 174);
  }

  span {
    color: #ffa500;
  }
`;