import { message } from "antd";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useOutletContext } from "react-router-dom";
import resolveReport from "~/api/services/report/resolveReport";
import PostItem from "~/components/home/post/PostItem";
import DeletePostModal from "~/components/reports/DeletePostModal";
import { refresh } from "~/utils/common";

const ReportPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const [data, loading, modal, setModal] = useOutletContext();
  const [reason, setReason] = useState("");
  const [resolving, setResolving] = useState(false);

  const handleDeletePost = async () => {
    setResolving(true);
    await resolveReport(currentUser.token, data?.report.id, true, reason);
    setResolving(false);
    setModal(null);
    refresh();
    message.success('Report resolved!');
  };

  return (
    <>
      <PostItem post={data?.post} loading={loading} />
      <DeletePostModal
        open={modal === "delete"}
        loading={resolving}
        onCancel={() => setModal(null)}
        onDeletePost={handleDeletePost}
        onReasonChange={setReason}
      />
    </>
  );
};

export default ReportPost;
