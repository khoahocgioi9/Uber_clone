import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./pages/Home";
import "./App.css"
import Error404 from "./pages/Error404";
import FooterComponent from "./components/FooterComponent";
const {Content} = Layout

function App() {
  return (
    <BrowserRouter>
      <>
        <Layout style={{margin: "", }}>
          <HeaderComponent />
          <Content>
            <Routes>
              {/* các component */}
              <Route path="/" element={<Home/>}></Route>
              <Route path="*" element={<Error404/>}></Route>
            </Routes>
          </Content>
          <FooterComponent/>
        </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
