import logo from '~/assets/logo.png';

const Splash = () => {
  return (
    <div className='w-screen h-screen flex items-center justify-center absolute top-0 left-0 bg-white'>
        <img src={logo} alt='Logo'/>
    </div>
  )
}

export default Splash