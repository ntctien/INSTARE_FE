import { Divider } from "antd";
import ContactItem from "./ContactItem";

const Contacts = () => {
  return (
    <div
      className="flex-1 flex flex-col bg-white overflow-hidden"
      style={{
        borderRadius: "10px 10px 0px 10px",
        boxShadow: " 0px -2px 4px rgba(0, 0, 0, 0.25)",
      }}
    >
      <h2 className="font-bold text-20 ml-[23px] mt-[17px] font-ubuntu">Contacts</h2>
      <Divider className="mt-[14px] mb-0 bg-[#00000026]" />
      <div className="py-[21px] px-[11px] flex flex-col gap-y-[22px] overflow-y-auto flex-1">
        <ContactItem />
      </div>
    </div>
  );
};

export default Contacts;
