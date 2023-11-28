import styled from "styled-components";
import FeedSearch from "./FeedSearch";
import FeedList from "./FeedList";

export default function NewFeedSection() {
  return (
    <StNewFeedSection>
      <SectionTitle>최신 글</SectionTitle>
      <SectionDesc>가장 뉴 트랜드에 대한 이야기들</SectionDesc>

      <FeedSearch />

      <FeedList />
    </StNewFeedSection>
  );
}

const StNewFeedSection = styled.section`
  width: 700px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  font-family: "Noto Sans KR";
`;

const SectionDesc = styled.h4`
  font-size: 0.925rem;
  font-weight: 500;
  font-style: normal;
  font-family: "Noto Sans KR";
  color: #9da7ae;
`;
