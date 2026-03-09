import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import banner1 from '../assets/banner1.jpg'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
const Types = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        // this div for wrapping all the banners in one section along with the animations
        <div className='w-full lg:px-20 px-5 py-[80px] grid lg:grid-cols-3 grid-cols-1 justify-center items-start gap-10'>
            <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-end gap-7 bg-cover bg-center lg:p-10  p-20 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105' style={{ backgroundImage: `url(${banner1})` }}>

                <h1 className='text-(--theme-yellow)  border rounded-lg border-(--theme-yellow) px-6 py-2 font-semibold text-lg'>60% OFF</h1>
                <h1 className='lg:text-3xl text-2xl text-end lg:w-[200px] text-white font-semibold'>Wireless Devices</h1>
                <button className='bg-(--theme-yellow) px-6 py-3 rounded-lg text-black font-semibold'>SHOP NOW</button>
            </div>


            <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-end gap-7 bg-cover bg-center lg:p-10 p-20 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105' style={{ backgroundImage: `url(${banner2})` }}>

                <h1 className='text-(--theme-yellow)  border rounded-lg border-(--theme-yellow) px-6 py-2 font-semibold text-lg'>60% OFF</h1>
                <h1 className='lg:text-3xl text-2xl text-end lg:w-[200px] text-white font-semibold'>Wireless Devices</h1>
                <button className='bg-(--theme-yellow) px-6 py-3 rounded-lg text-black font-semibold'>SHOP NOW</button>

            </div>
            <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col justify-center items-end gap-7 bg-cover bg-center lg:p-10 p-20 rounded-lg transition-transform duration-100 ease-in-out hover:scale-105' style={{ backgroundImage: `url(${banner3})` }}>

                <h1 className='text-(--theme-yellow)  border rounded-lg border-(--theme-yellow) px-6 py-2 font-semibold text-lg'>60% OFF</h1>
                <h1 className='lg:text-3xl text-2xl text-end lg:w-[200px] text-white font-semibold'>Wireless Devices</h1>
                <button className='bg-(--theme-yellow) px-6 py-3 rounded-lg text-black font-semibold'>SHOP NOW</button>

            </div>

        </div>
    )
}

export default Types
