import { Avatar, Button, Dropdown, Layout, Space } from "antd";
import React, { useEffect, useState } from "react";
import AppsIcon from "@mui/icons-material/Apps";
import ModalSignUp from "./account(lg,su)/ModalSignup";
import ModalLogin from "./account(lg,su)/ModalLogin";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import LogoutIcon from '@mui/icons-material/Logout';

const { Header } = Layout;

const items = [
  {
    key: "1",
    label: (
      <Link
        style={{
          textDecoration: "none",
          fontSize: 15,
          width: 50,
          fontWeight: 500,
          marginLeft: 15,
        }}
        target="_blank"
        rel="noopener noreferrer"
        to="/"
      >
        Home
      </Link>
    ),
    icon: <HomeIcon style={{ fontSize: 25 }} />,
  },
  {
    key: "2",
    label: (
      <Link
        style={{
          textDecoration: "none",
          fontSize: 15,
          width: 50,
          fontWeight: 500,
          marginLeft: 15,
        }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.aliyun.com"
      >
        Ride
      </Link>
    ),
    icon: <DirectionsCarIcon style={{ fontSize: 25 }} />,
  },
  {
    key: "3",
    label: (
      <Link
        style={{
          textDecoration: "none",
          fontSize: 15,
          width: 50,
          fontWeight: 500,
          marginLeft: 15,
        }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{ fontSize: 25 }} />,
  },
  {
    key: "4",
    label: (
      <Link
        style={{
          textDecoration: "none",
          fontSize: 15,
          width: 50,
          fontWeight: 500,
          marginLeft: 15,
        }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{ fontSize: 25 }} />,
  },
  {
    key: "5",
    label: (
      <Link
        style={{
          textDecoration: "none",
          fontSize: 15,
          width: 50,
          fontWeight: 500,
          marginLeft: 15,
        }}
        target="_blank"
        rel="noopener noreferrer"
        to="https://www.luohanacademy.com"
      >
        Eat
      </Link>
    ),
    icon: <LocalDiningIcon style={{ fontSize: 25 }} />,
  },
];

function HeaderComponent() {
  const [isLogin, setIsLogin] = useState(false);
  const [isSignin, setIsSignin] = useState(false);

  const [user, setUser] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser();
      }
    });
  }, []);

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
                    width: "200px", // Adjust the width as per your preference
                    maxHeight: "200px", // Adjust the height as per your preference
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
            </Nav>
            {user ? (
              <Space>
                <div style={{color:"#f0f0f0", fontWeight: 500}}>Hello {`${user.email}`}</div>
                <Button shape="round" style={{border:"none", fontWeight: 700}} onClick={() => auth.signOut()}><LogoutIcon/>Logout</Button>
              </Space>
            ) : (
              <Space>
                <Nav.Link>
                  <Button
                    onClick={() => setIsLogin(true)}
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
                <Nav.Link>
                  <Button
                    onClick={() => setIsSignin(true)}
                    className="text-black fw-bold fs-6 "
                    shape="round"
                    style={{ border: "none" }}
                  >
                    Sign Up
                  </Button>
                </Nav.Link>
              </Space>
            )}

            <ModalSignUp
              isVisible={isSignin}
              onClose={() => setIsSignin(false)}
            />
            <ModalLogin isVisible={isLogin} onClose={() => setIsLogin(false)} />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default HeaderComponent;
