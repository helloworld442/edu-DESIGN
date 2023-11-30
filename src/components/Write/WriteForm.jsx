import styled from "styled-components";
import InputField from "./InputField";
import TextAreaField from "./TextAreaField";
import Button from "../@common/Button";

export default function WriteForm() {
  return (
    <StWriteForm>
      <InputField label="제목" name="title" placeholder="제목을 입력해주세요" />
      <TextAreaField
        label="내용"
        name="content"
        placeholder="내용을 입력해주세요"
      />

      <WriteFormButtons>
        <Button text="취소" size="medium" $primary="true" />
        <Button text="완료" size="medium" $primary="false" />
      </WriteFormButtons>
    </StWriteForm>
  );
}

const StWriteForm = styled.form`
  width: 100%;
  padding: 12px 0;
  margin: 12px 0;
  box-sizing: border-box;
`;

const WriteFormButtons = styled.div`
  width: 100%;
  padding: 48px 0;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 18px;
`;
