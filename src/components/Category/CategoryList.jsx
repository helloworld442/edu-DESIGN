import styled, { css } from "styled-components";
import CategoryItem from "./CategoryItem";

const categorys = [
  { categoryId: 1, categoryName: "컴퓨터", categoryDesc: "요즘 뜨고 있는 IT" },
  {
    categoryId: 2,
    categoryName: "경영",
    categoryDesc: "사람들에게 많이 사랑받고 있는",
  },
  {
    categoryId: 3,
    categoryName: "교육",
    categoryDesc: "많은 인재를 발굴하기 위한",
  },
  {
    categoryId: 4,
    categoryName: "자연과학",
    categoryDesc: "찐 이과들에 성지인",
  },
  {
    categoryId: 5,
    categoryName: "의학",
    categoryDesc: "많은 사람들을 살리기 위한",
  },
  { categoryId: 6, categoryName: "공학", categoryDesc: "찐 공학도에게 성지인" },
  {
    categoryId: 7,
    categoryName: "e 스포츠",
    categoryDesc: "많은 학생들에게 관심받고 있는",
  },
  {
    categoryId: 8,
    categoryName: "경제",
    categoryDesc: "요즘 대세 주식에 대한",
  },
];

export default function CategoryList() {
  const newCategorys = categorys.reduce((acc, _, index) => {
    if (index % 2 === 0) {
      acc.push(categorys.slice(index, index + 2));
    }
    return acc;
  }, []);

  return (
    <CategoryListBox>
      {newCategorys.map((categorys, i) => (
        <StCategoryList $under={i % 2 === 1}>
          {categorys.map((category, j) => (
            <CategoryItem key={i + j} category={category} index={i + j} />
          ))}
        </StCategoryList>
      ))}
    </CategoryListBox>
  );
}

const CategoryListBox = styled.div`
  width: 850px;
  margin: 72px 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 14px;
`;

const StCategoryList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 14px;

  ${(props) =>
    props.$under &&
    css`
      margin-top: 108px;
    `}
`;
