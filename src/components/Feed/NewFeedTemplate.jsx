import styled from "styled-components";
import FeedCategory from "./FeedCategory";
import NewFeedSection from "./NewFeedSection";

export default function NewFeedTemplate() {
  return (
    <StNewFeedTemplate>
      <FeedCategory />
      <NewFeedSection />
    </StNewFeedTemplate>
  );
}

const StNewFeedTemplate = styled.main`
  width: 950px;
  height: 500px;
  margin-top: 36px;
  display: flex;
  align-items: flex-start;
  gap: 64px;
`;
