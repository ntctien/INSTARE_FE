import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import getReport from "~/api/services/report/getReport";
import PostItem from "~/components/home/post/PostItem";

const ReportPost = () => {
  const { currentUser } = useSelector((state) => state.user);
  const { id } = useParams();
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);

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

  console.log(data);

  return <PostItem post={data?.post} loading={loading} />;
};

export default ReportPost;
