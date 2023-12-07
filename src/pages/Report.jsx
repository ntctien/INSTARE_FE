import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Outlet, useParams } from "react-router-dom";
import getReport from "~/api/services/report/getReport";
import ReportAction from "~/components/reports/ReportAction";
import ViewReportsModal from "~/components/reports/ViewReportsModal";

const Report = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [modal, setModal] = useState();

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
        setData({
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
        });
      })
      .catch((err) => console.log(err));
    setLoading(false);
  };

  return (
    <div className="w-[800px] pb-6 mx-auto">
      <ReportAction onView={() => setModal("view")} />
      <Outlet context={[data, loading]} />
      <ViewReportsModal
        reasons={data?.reasons}
        loading={loading}
        open={modal === "view"}
        onCancel={() => setModal(null)}
      />
    </div>
  );
};

export default Report;
