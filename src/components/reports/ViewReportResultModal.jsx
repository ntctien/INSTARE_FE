import React from "react";
import ReasonModal from "../modal/ReasonModal";

const ViewReportResultModal = ({ violated, reason, ...rest }) => {
  return (
    <ReasonModal
      readOnly
      title={
        <p>
          This post was marked:{" "}
          <span className={violated ? "text-red" : "text-blue-darker"}>
            {violated ? "VIOLATED" : "NORMAL"}
          </span>
        </p>
      }
      reason={reason}
      {...rest}
    />
  );
};

export default ViewReportResultModal;
