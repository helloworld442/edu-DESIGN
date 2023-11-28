import styled from "styled-components";

export default function CategoryHead() {
  return (
    <StCategoryHead>
      <CategoryHeadTitle>
        <span>카테고리</span>
        학교에서는 듣지 못하는 여러 교육 정보의
        <br /> 카테고리를 소개합니다.
      </CategoryHeadTitle>
    </StCategoryHead>
  );
}

const StCategoryHead = styled.div`
  margin: 36px 0;
  text-align: center;
`;

const CategoryHeadTitle = styled.h1`
  font-size: 2.15rem;
  font-weight: 550;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #333;
  line-height: 3.5rem;
  display: flex;
  flex-direction: column;

  span {
    height: 48px;
    font-size: 0.95rem;
    font-weight: 550;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    color: #ffa500;
  }
`;