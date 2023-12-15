import { Row, Spin } from "antd";
import React from "react";
import SecondaryButton from "../buttons/SecondaryButton";
import WhiteTextButton from "../buttons/WhiteTextButton";

const ReportAction = ({
  reportType,
  resolved,
  loading,
  rejecting,
  onView,
  onReject,
  onMarkViolated,
  onViewResult,
}) => {
  return (
    <Row className="h-12 justify-between font-ubuntu my-5 w-[800px]">
      {loading ? (
        <Spin className="mx-auto" />
      ) : (
        <>
          <h2 className="my-auto font-medium text-lg">
            {resolved
              ? "This report has been resolved"
              : `This ${reportType} needs to be reviewed`}
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
            {!resolved ? (
              <>
                <WhiteTextButton
                  loading={rejecting}
                  style={{ background: "#96CAF7" }}
                  onClick={onReject}
                >
                  Reject reports
                </WhiteTextButton>
                <WhiteTextButton
                  onClick={onMarkViolated}
                  style={{ background: "#F24E1E" }}
                >
                  {reportType === "post" ? "Delete post" : "Ban profile"}
                </WhiteTextButton>
              </>
            ) : (
              <WhiteTextButton
                onClick={onViewResult}
                style={{ background: "#96CAF7" }}
              >
                View result
              </WhiteTextButton>
            )}
          </Row>
        </>
      )}
    </Row>
  );
};

export default ReportAction;
