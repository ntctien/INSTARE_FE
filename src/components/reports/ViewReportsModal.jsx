import React from "react";
import CloseModal from "../modal/CloseModal";
import ReportItem from "./ReportItem";
import { Spin } from "antd";

const ViewReportsModal = ({ reasons = [], loading, ...rest }) => {
  return (
    <CloseModal title={"Reports"} open {...rest}>
      <div className="px-4 py-3 w-[450px] max-h-[60vh] flex flex-col gap-3 overflow-y-auto">
        {loading ? (
          <Spin />
        ) : (
          reasons.map((reason) => <ReportItem key={reason.id} {...reason} />)
        )}
      </div>
    </CloseModal>
  );
};

export default ViewReportsModal;
