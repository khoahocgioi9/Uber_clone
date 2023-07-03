import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import { Layout } from "antd";
import HeaderComponent from "./components/HeaderComponent";
import Home from "./pages/Home";
  
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
            </Routes>
          </Content>
        </Layout>
      </>
    </BrowserRouter>
  );
}

export default App;
