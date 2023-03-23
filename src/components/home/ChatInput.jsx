import { Input } from "antd";
import plusIcon from "../../assets/plus.svg";

const { TextArea } = Input;

const ChatInput = () => {
  return (
    <div className="row gap-x-[5px] px-[8px] py-[10px] min-h-[50px] bg-[#D9D9D926] border-t-1 border-[#00000026]">
      <button className="w-[20px] h-[20px] bg-grey-dark rounded-full flex items-center justify-center">
        <img src={plusIcon} alt="Plus" />
      </button>
      <TextArea
        className="chat-input"
        autoSize
      />
      <button>
        <svg
          width="20"
          height="18"
          viewBox="0 0 20 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M8.26003 9H3.33336L1.68586 2.44584C1.67531 2.40775 1.66888 2.36863 1.66669 2.32917C1.64836 1.72834 2.31003 1.31167 2.88336 1.58667L18.3334 9L2.88336 16.4133C2.31669 16.6858 1.66336 16.2808 1.66669 15.6908C1.66838 15.6381 1.67764 15.5859 1.69419 15.5358L2.91669 11.5"
            stroke="#777777"
            strokeWidth={2.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="hover:stroke-[#676767]"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatInput;