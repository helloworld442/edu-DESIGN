import styled from "styled-components";
import { device } from "../../utils/media";

export default function WriteHead() {
  return (
    <StWriteHead>
      <WriteHeadTitle>
        <span>글 남기기</span>
        전하고 싶었던 글을 남기고
        <br />
        다양한 분야에 글들의 확인해보세요.
      </WriteHeadTitle>
    </StWriteHead>
  );
}

const StWriteHead = styled.div`
  margin-top: 12px;
  margin-bottom: 36px;
`;

const WriteHeadTitle = styled.h1`
  font-size: 1.65rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #333;
  line-height: 3rem;
  display: flex;
  flex-direction: column;
  text-align: left;

  span {
    height: 36px;
    font-size: 0.725rem;
    font-weight: 550;
    font-family: "Noto Sans KR";
    color: #ffa500;
  }

  @media ${device.tablet} {
    font-size: 1.5rem;

    span {
      font-size: 0.825rem;
    }
  }
`;
