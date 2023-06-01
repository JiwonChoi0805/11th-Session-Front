import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { ThemeContext } from "../contexts/ThemeContext";
import { UserContext } from "../contexts/UserContext";

const SecondPage = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <PageWrapper>
        <UserContext.Provider value={{ user: "아기사자" }}>
          <Header />
          <Content />
        </UserContext.Provider>
        <Footer />
      </PageWrapper>
    </ThemeContext.Provider>
  );
};

export default SecondPage;

const PageWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
