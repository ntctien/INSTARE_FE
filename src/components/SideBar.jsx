import '~/styles/SideBar.css'
import useClickOutside from "~/hooks/useClickOutside";

const SideBar = ({ children, onClose }) => {
  const { ref } = useClickOutside(onClose);
  return (
    <div
      ref={ref}
      style={{ boxShadow: "4px 0px 4px rgba(0, 0, 0, 0.25)" }}
      className={`absolute top-0 -right-[360px] w-[360px] h-full bg-[#F0F6FD] z-20 rounded-r-15 flex flex-col`}
    >
      {children}
    </div>
  );
};

export default SideBar;
