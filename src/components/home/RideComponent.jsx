import { Button, Card, Divider, Input, Space } from "antd";
import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function RideComponent() {
  return (
    <>
      <h2 className="fw-bold fs-1" style={{ width: "130%" }}>
        Request a ride now
      </h2>

      <div style={{ position: "relative", marginTop: "5vh" }}>
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "5%",
            transform: "translateX(-50%)",
            width: "2px",
            height: "60%",
            backgroundColor: "#000000",
            marginTop: 20,
          }}
        ></div>
        <Space.Compact size="large">
          <Input
            style={{ background: "#f0f0f0", width: "350px" }}
            bordered={false}
            addonBefore={<FiberManualRecordIcon fontSize="50px" />}
            suffix={<LocationOnIcon style={{ cursor: "pointer" }} />}
            placeholder="Enter pickup location"
          />
        </Space.Compact>
        <Space.Compact size="large">
          <Input
            style={{ marginTop: "5vh", background: "#f0f0f0", width: "350px" }}
            bordered={false}
            addonBefore={<FiberManualRecordIcon fontSize="50px" />}
            placeholder="Enter destination"
          />
        </Space.Compact>
      </div>
      <div style={{ marginTop: "10vh" }}>
        <Button
          className="fs-6 fw-bold"
          style={{
            border: "none",
            background: "#000",
            color: "#FFF",
            height: "8vh",
          }}
        >
          Request now
        </Button>
        <Button
          className="fs-6 fw-bold"
          style={{
            border: "none",
            background: "#f0f0f0",
            color: "#000",
            marginLeft: "15px",
            height: "8vh",
          }}
        >
          Schedule for later
        </Button>
      </div>
    </>
  );
}

export default RideComponent;
