import React from 'react'

const ContactItem = () => {
  return (
    <div className='row'>
        {/* Avatar */}
        <div className='w-[50px] h-[50px] bg-grey rounded-full'></div>
        {/* Message */}
        <div className='flex items-end'>
            <div className='ml-[10px]'>
                <h3 className='contact-item-read'>Tên</h3>
                <p className='contact-item-read mt-[4px]'>Hello, this is a read message</p>
            </div>
            <p className='mx-[2px] mb-[3px] contact-item-time'>.</p>
            <p className='contact-item-time'>11:59</p>
        </div>
    </div>
  )
}

export default ContactItem