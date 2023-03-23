import Avatar from "./Avatar";

const ContactItem = ({name,setCurrChat}) => {
  return (
    <div className='row flex-none cursor-pointer hover:bg-[#bfb2f336] p-[11px]' onClick={()=>setCurrChat(name)}>
        {/* Avatar */}
        <Avatar/>
        {/* Message */}
        <div className='flex items-end'>
            <div className='ml-[10px]'>
                <h3 className='contact-item-read'>{name}</h3>
                <p className='contact-item-read mt-[4px] w-[178px] truncate'>Hello, this is a read messageHello, this is a read messageHello, this is a read messageHello, this is a read message</p>
            </div>
            <p className='mx-[2px] mb-[3px] contact-item-time'>.</p>
            <p className='contact-item-time'>11:59</p>
        </div>
    </div>
  )
}

export default ContactItem