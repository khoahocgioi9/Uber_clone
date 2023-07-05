import TimeToLeaveIcon from "@mui/icons-material/TimeToLeave";
import { Card, Menu } from "antd";
import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import backgroundimg from "../../assets/1.png";
import LocalDiningIcon from "@mui/icons-material/LocalDining";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import DriveAndDeliver from "./DriveAndDeliver";
import EatComponent from "./EatComponent";
import RideComponent from "./RideComponent";
import FooterBanner from "./FooterBanner";

const { SubMenu } = Menu;

function HomeBanner() {
  const [currentMenu, setCurrentMenu] = useState("menu1");

  const menuItems = [
    {
      label: "Drive or deliver",
      key: "menu1",
      icon: <SignalCellularAltIcon />,
      component: <DriveAndDeliver />,
    },
    {
      label: "Eat",
      key: "menu2",
      icon: <LocalDiningIcon />,
      component: <EatComponent />,
    },
    {
      label: "Ride",
      key: "menu3",
      icon: <TimeToLeaveIcon />,
      component: <RideComponent />,
    },
  ];

  const renderComponent = () => {
    const menuItem = menuItems.find((item) => item.key === currentMenu);
    return menuItem ? menuItem.component : null;
  };

  const handleClick = (e) => {
    setCurrentMenu(e.key);
  };

  return (
    <>
      <Container
        fluid
        style={{
          backgroundImage: `url(${backgroundimg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          minHeight: "600px",
        }}
      >
        <Row>
          <Col md={{ span: 4, offset: 1 }} style={{ marginTop: "10vh" }}>
            <Card style={{ borderRadius: "0px" }}>
              <Row>
                {menuItems.map((item) => (
                  <Col span={8} key={item.key}>
                    <Menu
                      onClick={handleClick}
                      selectedKeys={[currentMenu]}
                      mode="horizontal"
                    >
                      <Menu.Item key={item.key}>
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                          }}
                        >
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                      </Menu.Item>
                    </Menu>
                  </Col>
                ))}
              </Row>
              <Row>
                <Col md={{ span: 10, offset: 1 }} style={{ marginTop: "5vh" }}>
                  {renderComponent()}
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      </Container>
      <FooterBanner />
    </>
  );
}

export default HomeBanner;
