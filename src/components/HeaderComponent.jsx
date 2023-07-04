import { Button, Dropdown, Layout, Space } from "antd";
import React, { useEffect, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ModalSignIn from "./account(lg,su)/ModalSignup";
import ModalLogin from "./account(lg,su)/ModalLogin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const { Header } = Layout;
const items2 = [
  {
    label: <Link to="/">1st menu item</Link>,
    key: "0",
  },
  {
    label: <Link to="/">2nd menu item</Link>,
    key: "1",
  },
  {
    type: "divider",
  },
  {
    label: "3rd menu item",
    key: "3",
  },
];

const items = [
  {
    key: "1",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="/"
      >
        1st menu item
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.aliyun.com"
      >
        2nd menu item
      </Link>
    ),
  },
  {
    key: "3",
    label: (
      <Link
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        3rd menu item
      </Link>
    ),
  },
];

function HeaderComponent() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const [user, setUser] = useState();

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //     setUser(user);
  //     }else{
  //       setUser();
  //     }
  //   });
  // }, []);

  return (
    <>
      <Navbar bg="black" expand="lg" style={{ height: "10vh", width: "100%" }}>
        <Container>
          <Navbar.Brand
            href="/"
            className="text-light me-5 fs-3 fw-bold"
            style={{ letterSpacing: "15px" }}
          >
            Uber
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ">
            <Nav.Link href="/" className="text-light me-4 fs-6">
                Company
              </Nav.Link>
              <Nav.Link href="/" className="text-light me-4 fs-6">
                Safety
              </Nav.Link>
              <Nav.Link href="/" className="text-light me-4 fs-6">
                Help
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link>
                <Dropdown
                  menu={{
                    items,
                  }}
                  trigger={["click"]}
                  placement="bottom"
                >
                  <Button
                    className="text-light me-4 fs-6 fw-bold"
                    style={{
                      border: "none",
                      background: "#000000",
                      color: "#FFF",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <AppsIcon />
                    Product
                  </Button>
                </Dropdown>
              </Nav.Link>

              <Nav.Link href="#login">
                <Button
                  className="text-light fw-bold fs-6 "
                  style={{
                    border: "none",
                    background: "#000000",
                    color: "#FFF",
                  }}
                >
                  Login
                </Button>
              </Nav.Link>
              <Nav.Link href="#register">
                <Button
                  className="text-black fw-bold fs-6 "
                  shape="round"
                  style={{ border: "none" }}
                >
                  Sign Up
                </Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
  // <Header
  //   className="d-flex justify-content-between"
  //   style={{ background: "black" , height:"10vh", alignItems:"center"}}
  // >
  //   <Space
  //     className="left "
  //     style={{
  //       marginLeft: 20,
  //       color: "#FFFFFF",
  //       display: "flex",
  //       alignItems: "center",
  //       gap: 80,
  //     }}
  //   >
  //     <span
  //       style={{
  //         fontSize: 25,
  //         display: "flex",
  //         textAlign: "center",
  //         alignItems: "center",
  //         letterSpacing: 15,
  //         fontWeight: 900,
  //       }}
  //     >
  //       Uber
  //     </span>
  //     <span
  //       style={{
  //         color: "#FFFFFF",
  //         display: "flex",
  //         alignItems: "center",
  //         gap: 40,
  //         marginLeft: 20,
  //         fontSize: 15,
  //       }}
  //     >
  //       <span>
  //         Company <ExpandMoreIcon />
  //       </span>
  //       <span>Safety</span>
  //       <span>Help</span>
  //     </span>
  //   </Space>
  //   <Space
  //     className="right"
  //     style={{
  //       marginRight: 20,
  //       color: "#FFFFFF",
  //       display: "flex",
  //       alignItems: "center",
  //       gap: 40,
  //     }}
  //   >
  //     <span>
  //       <AppsIcon /> Products
  //     </span>
  //     <span
  //       style={{
  //         display: "flex",
  //         alignItems: "center",
  //         gap: 10,
  //       }}
  //     >
  //       <Button
  //         style={{
  //           border: "none",
  //           background: "#000000",
  //           color: "#FFF",
  //           fontWeight: "700",
  //           display: "flex",
  //           alignItems: "center",
  //         }}
  //       >
  //         Login
  //       </Button>
  //       <Button
  //         shape="round"
  //         style={{
  //           fontWeight: "700",
  //           display: "flex",
  //           alignItems: "center",
  //         }}
  //       >
  //         Signup
  //       </Button>
  //     </span>

  //     {/* <span>
  //       {user ? (
  //         <Space>
  //           <Button onClick={() => auth.singOut()}>Logout</Button>
  //         </Space>
  //       ) : (
  //         <Space className="right">
  //           <Button onClick={() => setIsSignin(true)}>Sign in</Button>
  //           <Button onClick={() => setIsLogin(true)}>Login</Button>
  //         </Space>
  //       )}
  //       <ModalSignIn
  //         isVisible={isSignin}
  //         onClose={() => setIsSignin(false)}
  //       />
  //       <ModalLogin isVisible={isLogin} onClose={() => setIsLogin(false)} />
  //     </span> */}
  //   </Space>
  // </Header>
}

export default HeaderComponent;
