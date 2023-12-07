import { useOutletContext } from "react-router-dom";
import PostItem from "~/components/home/post/PostItem";

const ReportPost = () => {
  const [data, loading] = useOutletContext();

  return <PostItem post={data?.post} loading={loading} />;
};

export default ReportPost;
