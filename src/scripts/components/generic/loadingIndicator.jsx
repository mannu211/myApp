import React from "react";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function LoadingIndicator(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: "#ffffff",
        opacity: 0.8,
      }}
    >
      <div
        style={{
          position: "absolute",
          top: "47%",
          left: "45%",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <CircularProgress color="primary" />
          <div style={{ marginTop: 10 }}>Loading ...</div>
        </div>
      </div>
    </div>
  );
}
