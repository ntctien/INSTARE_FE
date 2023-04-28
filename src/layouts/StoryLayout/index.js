import { Outlet } from "react-router-dom"
import './StoryLayout.css';
import Logo from "~/components/Logo"
import CloseButton from "~/components/CloseButton"

const StoryLayout = () => {
    return (
        <div className='bg-blue-dark w-screen h-screen relative'>
            <div className='row gap-x-[22px] absolute top-[17px] left-[24px]'>
                <CloseButton width={'41.67px'} fill={'#FFFFFF'} opacity={'0.5'} />
                <Logo textColor={'#FFFFFF'} />
            </div>
            <Outlet />
        </div>
    )
}

export default StoryLayout