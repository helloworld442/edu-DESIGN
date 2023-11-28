import styled from "styled-components";
import Header from "../components/@common/Header";
import Footer from "../components/@common/Footer";

export default function CategoryLayout({ children }) {
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
`;
