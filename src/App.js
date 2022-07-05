import React from "react";
import HomePage from "./HomePage";
import TestPage from "./TestPage";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router";
import styled from "styled-components";

const App = () => {
  return (
    <>
      <Main>
        <Router>
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/test-page" element={<TestPage />} />
          </Routes>
        </Router>
      </Main>
    </>
  );
};

export default App;

const Main = styled.div`
  font-family: Arial, Helvetica, sans-serif;
`;
