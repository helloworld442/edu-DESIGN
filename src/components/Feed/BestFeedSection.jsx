import styled from "styled-components";
import FeedSearch from "./FeedSearch";
import FeedList from "./FeedList";

export default function BestFeedSection() {
  return (
    <StBestFeedSection>
      <SectionTitle>인기 글</SectionTitle>
      <SectionDesc>가장 신빙성 있는 이야기들</SectionDesc>

      <FeedSearch />

      <FeedList />
    </StBestFeedSection>
  );
}

const StBestFeedSection = styled.section`
  width: 700px;
`;

const SectionTitle = styled.h3`
  margin-bottom: 12px;
  font-size: 1.5rem;
  font-weight: bold;
  font-style: normal;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
`;

const SectionDesc = styled.h4`
  font-size: 0.925rem;
  font-weight: 500;
  font-style: normal;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  color: #9da7ae;
`;
