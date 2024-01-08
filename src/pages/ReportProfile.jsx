import React from "react";
import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import resolveReport from "~/api/services/report/resolveReport";
import { refresh } from "~/utils/common";
import Profile from "./Profile";
import ReasonModal from "~/components/modal/ReasonModal";

const ReportProfile = () => {
  const { currentUser } = useSelector((state) => state.user);
  // eslint-disable-next-line no-unused-vars
  const [data, loading, modal, setModal] = useOutletContext();
  const [reason, setReason] = useState("");
  const [resolving, setResolving] = useState(false);

  const handleBanProfile = async () => {
    setResolving(true);
    await resolveReport(currentUser.token, data?.report.id, true, reason);
    setResolving(false);
    setModal(null);
    refresh();
    message.success("Report resolved!");
  };

  return (
    <>
      <Profile />
      <ReasonModal
        title={"You want to ban this profile?"}
        open={modal === "ban-profile"}
        loading={resolving}
        onCancel={() => setModal(null)}
        onConfirm={handleBanProfile}
        onReasonChange={setReason}
      />
    </>
  );
};

export default ReportProfile;
