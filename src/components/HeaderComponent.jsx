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
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link
        style={{ textDecoration: "none", fontSize: 15, width:50, fontWeight:500, marginLeft: 15 }}
        target="_blank"
        rel="noopener noreferrer"
        to="/"
      >
        Home
      </Link>
    ),
    icon: <HomeIcon style={{fontSize:25}}/>,
  },
  {
    key: "2",
    label: (
      <Link
        style={{ textDecoration: "none", fontSize: 15, width:50, fontWeight:500, marginLeft: 15 }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.aliyun.com"
      >
        Ride
      </Link>
    ),
    icon: <DirectionsCarIcon style={{fontSize:25}}/>,
  },
  {
    key: "3",
    label: (
      <Link
        style={{ textDecoration: "none", fontSize: 15, width:50, fontWeight:500, marginLeft: 15 }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{fontSize:25}}/>,
  },
  {
    key: "4",
    label: (
      <Link
        style={{ textDecoration: "none", fontSize: 15, width:50, fontWeight:500, marginLeft: 15 }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{fontSize:25}}/>,
  },
  {
    key: "5",
    label: (
      <Link
        style={{ textDecoration: "none", fontSize: 15, width:50, fontWeight:500, marginLeft: 15 }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{fontSize:25}}/>,
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
                  overlayStyle={{
                    width: '200px', // Adjust the width as per your preference
                    maxHeight: '200px', // Adjust the height as per your preference
                  }}  
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
