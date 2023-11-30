import styled from "styled-components";
import WriteHead from "./WriteHead";
import WriteForm from "./WriteForm";
import { device } from "../../utils/media";

export default function WriteTemplate() {
  return (
    <StWriteTemplate>
      <WriteHead />
      <WriteForm />
    </StWriteTemplate>
  );
}

const StWriteTemplate = styled.main`
  width: 800px;
  margin: 14px 0;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobile} {
    width: 100%;
  }
`;
