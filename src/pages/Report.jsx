import { Outlet } from "react-router-dom";
import ReportAction from "~/components/reports/ReportAction";

const Report = () => {
  return (
    <div className="w-[800px] pb-6 mx-auto">
      <ReportAction />
      <Outlet/>
    </div>
  );
};

export default Report;
