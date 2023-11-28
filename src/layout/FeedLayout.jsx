import styled from "styled-components";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";
import { Outlet } from "react-router-dom";

export default function FeedLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
      <Footer />
    </Layout>
  );
}

const Layout = styled.div`
  position: relative;
  left: 50%;
  width: 1150px;
  height: auto;
  padding: 0 36px;
  box-sizing: border-box;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
