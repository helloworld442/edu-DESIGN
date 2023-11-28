import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-solid.svg";

export default function FeedSearch() {
  return (
    <FeedSearchForm>
      <FeedSearchButton />
      <FeedSearchInput placeholder="제목을 입력해주세요" />
    </FeedSearchForm>
  );
}

const FeedSearchForm = styled.form`
  width: 100%;
  height: 64px;
  padding: 0 18px;
  margin: 36px 0;
  border-radius: 8px;
  border: 1px solid #d7e0e6;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0px 4px 10px 0px rgba(58, 62, 65, 0.1);
`;

const FeedSearchButton = styled(SearchIcon)`
  width: 1.15rem;
  height: 1.15rem;
  fill: #ffa500;
`;

const FeedSearchInput = styled.input`
  width: 650px;
  border: none;
  outline: none;
  font-size: 1.05rem;
  font-weight: 350;
  color: #333;

  &::placeholder {
    color: rgb(157, 167, 174);
  }
`;
