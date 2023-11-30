import { Link } from "react-router-dom";
import styled from "styled-components";
import { device } from "../../utils/media";

export default function CategoryItem({ category, index }) {
  const { categoryId, categoryName, categoryDesc } = category;

  return (
    <StCategoryItem $bgColor={index % 2 === 0}>
      <a href={"/feed/" + "best/" + categoryId}>
        <CategoryItemDesc>{categoryDesc}</CategoryItemDesc>
        <CategoryItemTitle>{categoryName}</CategoryItemTitle>
      </a>
    </StCategoryItem>
  );
}

const StCategoryItem = styled.li`
  width: 100%;
  height: 230px;
  padding: 36px 24px;
  box-sizing: border-box;
  background: ${(props) => (props.$bgColor ? "#FFBB3F" : "#ffa500")};
  border-radius: 18px;
  cursor: pointer;
  transition: all 0.5s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  a {
    display: inline-block;
    width: 100%;
    height: 100%;
  }

  @media ${device.mobile} {
    height: 150px;
  }
`;

const CategoryItemDesc = styled.h4`
  margin-bottom: 6px;
  font-size: 0.75rem;
  font-weight: 550;
  font-family: "Noto Sans KR";
  color: #f8f8f8;
  line-height: 1rem;
`;

const CategoryItemTitle = styled.h3`
  margin-top: 6px;
  font-size: 1.6rem;
  font-weight: 300;
  color: #f8f8f8;
`;
