import styled from "styled-components";
import FeedItem from "./PostItem";

const feeds = [
  {
    category: "Javascript",
    title: "[Example 1] 자바스크립트 알고리즘 문의 ",
    problem:
      "[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의",
    question:
      "[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의\n[Example 1] 자바스크립트 알고리즘 문의",
    id: 11,
  },
  {
    category: "Javascript",
    title: "[Example 2] 자바스크립트 알고리즘 어렵네요 ",
    problem:
      "[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 \n",
    question:
      "[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 \n[Example 2] 자바스크립트 알고리즘 어렵네요 ",
    id: 12,
  },
  {
    category: "Javascript",
    title: "[Example 3] 리엑트 코드 질문입니당",
    problem:
      "[Example 3] 리엑트 코드 질문입니당\n[Example 3] 리엑트 코드 질문입니당\n[Example 3] 리엑트 코드 질문입니당\n",
    question:
      "[Example 3] 리엑트 코드 질문입니당\n[Example 3] 리엑트 코드 질문입니당\n[Example 3] 리엑트 코드 질문입니당\n",
    id: 13,
  },
];

export default function PostList() {
  return (
    <StPostList>
      {feeds.map((feed) => (
        <FeedItem key={feed.id} feed={feed} />
      ))}
    </StPostList>
  );
}

const StPostList = styled.ul``;
