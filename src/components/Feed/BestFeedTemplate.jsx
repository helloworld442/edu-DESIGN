import styled from "styled-components";
import FeedCategory from "./FeedCategory";
import BestFeedSection from "./BestFeedSection";
import { device } from "../../utils/media";

export default function BestFeedTemplate() {
  return (
    <StBestFeedTemplate>
      <FeedCategory />
      <BestFeedSection />
    </StBestFeedTemplate>
  );
}

const StBestFeedTemplate = styled.main`
  width: 950px;
  height: 500px;
  margin-top: 36px;
  display: flex;
  align-items: flex-start;
  gap: 64px;

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    display: flex;
    flex-direction: column;
  }
`;
