import styled from "styled-components";
import FeedCategory from "./PostCategory";
import { device } from "../../utils/media";
import BestPostSection from "./BestPostSection";

export default function BestPostTemplate() {
  return (
    <StBestPostTemplate>
      <FeedCategory />
      <BestPostSection />
    </StBestPostTemplate>
  );
}

const StBestPostTemplate = styled.main`
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
