import { Button } from "antd";
import React from "react";

function DriveAndDeliver() {
  return (
    <>
      <div>
        <h2 className="fw-bold fs-1">Get in the driver’s seat and get paid</h2>
        <div>
          Drive on the platform with the largest network of active riders.
        </div>
        <Button
          className="fs-6 fw-bold"
          style={{
            border: "none",
            background: "#000",
            color: "#FFF",
            marginTop: "5vh",
            height: "8vh",
          }}
        >
          Sign up to drive
        </Button>
      </div>
    </>
  );
}

export default DriveAndDeliver;
