import styled from "styled-components";
import { device } from "../utils/media";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function WriteLayout({ children }) {
  return (
    <Layout>
      <Header />
      {children}
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

  @media ${device.tablet} {
    width: 100%;
    padding: 0 10vw;
    box-sizing: border-box;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 0 24px;
    box-sizing: border-box;
  }
`;
