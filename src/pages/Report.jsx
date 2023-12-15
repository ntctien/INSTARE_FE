import { message } from "antd";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useLocation, useParams } from "react-router-dom";
import getReport from "~/api/services/report/getReport";
import resolveReport from "~/api/services/report/resolveReport";
import ReportAction from "~/components/reports/ReportAction";
import ViewReportResultModal from "~/components/reports/ViewReportResultModal";
import ViewReportsModal from "~/components/reports/ViewReportsModal";
import { refresh } from "~/utils/common";

const Report = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const location = useLocation();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState();
  const [rejecting, setRejecting] = useState(false);

  useEffect(() => {
    if (id) {
      getReportDetail(id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const getReportDetail = async (id) => {
    setLoading(true);
    await getReport(currentUser.token, id)
      .then(({ data }) => {
        setData(data.post ? {
          ...data,
          post: {
            ...data.post,
            mediaList: data.post.mediaList.map((item) => {
              return {
                url: item,
                type: item.includes("/video/") ? "video" : "image",
              };
            }),
          },
        } : data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  const rejectReport = async () => {
    setRejecting(true);
    await resolveReport(currentUser.token, id, false);
    setRejecting(false);
    refresh();
    message.success("Report resolved!");
  };

  return (
    <div className="pb-6 flex flex-col items-center">
      <ReportAction
        reportType={location.pathname.includes("post") ? "post" : "profile"}
        resolved={data?.report.resolved}
        loading={loading}
        rejecting={rejecting}
        onView={() => setModal("view")}
        onMarkViolated={
          data?.report.postId ? () => setModal("delete") : () => {}
        }
        onReject={rejectReport}
        onViewResult={() => setModal("result")}
      />
      <div className="w-full">
        <Outlet context={[data, loading, modal, setModal]} />
      </div>
      <ViewReportsModal
        reasons={data?.reasons}
        loading={loading}
        open={modal === "view"}
        onCancel={() => setModal(null)}
      />
      <ViewReportResultModal
        open={modal === "result"}
        onCancel={() => setModal(null)}
        violated={data?.report.result === "VIOLATED"}
        reason={data?.post?.deleteReason}
      />
    </div>
  );
};

export default Report;
