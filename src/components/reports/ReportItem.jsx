import { Divider, Row } from "antd";
import React from "react";
import getDateString from "~/utils/getDateString";

const ReportItem = ({ user, reason, createdAt }) => {
  return (
    <div className="bg-white border-1 border-grey rounded-10">
      <Row justify={"space-between"} align={"middle"} className="p-2">
        <h3>
          Reported by user: <span className="font-bold">{user.username}</span>
        </h3>
        <p className="text-black50 text-sm">{getDateString(createdAt)}</p>
      </Row>
      <Divider className="m-0" />
      <Row className="px-2 pt-2 pb-4">
        <p>Reason: {reason}</p>
      </Row>
    </div>
  );
};

export default ReportItem;
