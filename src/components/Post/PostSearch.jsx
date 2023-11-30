import styled from "styled-components";
import { ReactComponent as SearchIcon } from "../../assets/magnifying-glass-solid.svg";
import { device } from "../../utils/media";

export default function PostSearch() {
  return (
    <PostSearchForm>
      <PostSearchButton />
      <PostSearchInput placeholder="제목을 입력해주세요" />
    </PostSearchForm>
  );
}

const PostSearchForm = styled.form`
  width: 100%;
  height: 64px;
  padding: 0 18px;
  margin: 36px 0;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #d7e0e6;
  display: flex;
  align-items: center;
  gap: 12px;
  box-shadow: 0px 4px 10px 0px rgba(58, 62, 65, 0.1);
`;

const PostSearchButton = styled(SearchIcon)`
  width: 1.15rem;
  height: 1.15rem;
  fill: #ffa500;
`;

const PostSearchInput = styled.input`
  width: 650px;
  border: none;
  outline: none;
  font-size: 1.05rem;
  font-weight: 500;
  font-family: "Noto Sans KR";
  color: #333;

  &::placeholder {
    color: rgb(157, 167, 174);
  }

  @media ${device.mobile} {
    width: 200px;
  }
`;
