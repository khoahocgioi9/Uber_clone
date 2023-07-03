import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { Card, Menu } from "antd";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundimg from "../../assets/3.png";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const { SubMenu } = Menu;

function Banner() {
  const [currentMenu, setCurrentMenu] = useState("menu1");

  const handleClick = (e) => {
    setCurrentMenu(e.key);
  };

  return (
    <Container
      fluid
      style={{
        backgroundImage: `url(${backgroundimg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "500px",
      }}
    >
      <Row>
        <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "10vh" }}>
          <Card>
            <Row>
              <Col span={8}>
                <Menu
                  onClick={handleClick}
                  selectedKeys={[currentMenu]}
                  mode="horizontal"
                >
                  <Menu.Item key="menu1">
                    {" "}
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <SignalCellularAltIcon />
                      <span>Drive or deliver</span>
                    </div>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={8}>
                <Menu
                  onClick={handleClick}
                  selectedKeys={[currentMenu]}
                  mode="horizontal"
                >
                  <Menu.Item key="menu2">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <LocalDiningIcon />
                      <span>Eat</span>
                    </div>
                  </Menu.Item>
                </Menu>
              </Col>
              <Col span={8}>
                <Menu
                  onClick={handleClick}
                  selectedKeys={[currentMenu]}
                  mode="horizontal"
                >
                  <Menu.Item key="menu3">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                      }}
                    >
                      <TimeToLeaveIcon />
                      <span>Ride</span>
                    </div>
                  </Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Banner;
