import styled from "styled-components";
import CategoryHead from "./CategoryHead";
import CategoryList from "./CategoryList";

export default function CategoryTemplate() {
  return (
    <StCategoryTemplate>
      <CategoryHead />
      <CategoryList />
    </StCategoryTemplate>
  );
}

const StCategoryTemplate = styled.main`
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
