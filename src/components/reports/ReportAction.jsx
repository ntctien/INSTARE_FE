import { Row } from "antd";
import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import WhiteTextButton from "../buttons/WhiteTextButton";

const ReportAction = ({ onView, onReject, onDelete }) => {
  return (
    <Row className="h-12 justify-between font-ubuntu my-5">
      <h2 className="my-auto font-medium text-lg">
        This post needs to be reviewed
      </h2>
      <Row className="gap-x-4">
        <SecondaryButton
          onClick={onView}
          style={{
            borderRadius: 10,
            width: 140,
            padding: 0,
          }}
        >
          View reports
        </SecondaryButton>
        <WhiteTextButton onClick={onReject} style={{ background: "#96CAF7" }}>
          Reject reports
        </WhiteTextButton>
        <WhiteTextButton onClick={onDelete} style={{ background: "#F24E1E" }}>
          Delete post
        </WhiteTextButton>
      </Row>
    </Row>
  );
};

export default ReportAction;
