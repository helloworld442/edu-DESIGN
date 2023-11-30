import styled from "styled-components";
import FeedCategory from "./PostCategory";
import { device } from "../../utils/media";
import NewPostSection from "./NewPostSection";

export default function NewPostTemplate() {
  return (
    <StNewPostTemplate>
      <FeedCategory />
      <NewPostSection />
    </StNewPostTemplate>
  );
}

const StNewPostTemplate = styled.main`
  width: 950px;
  margin-top: 36px;
  display: flex;
  align-items: flex-start;
  gap: 64px;

  @media ${device.tablet} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  @media ${device.mobile} {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
