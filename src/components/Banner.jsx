import AOS from 'aos';
import 'aos/dist/aos.css'
import deal from '../assets/deal-bg.jpg'
import { useEffect } from 'react';
const Banner = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div className='w-full lg:px-20 px-5 py-[80px]'>
            <div className='flex flex-col w-full h-[300px] rounded-lg bg-cover bg-center justify-center items-center p-4 gap-4' style={{ backgroundImage: `url(${deal})` }}>
                <h1 className='text-xl  font-semibold text-(--theme-yellow)'>Everyday shopping</h1>
                <h1 className='text-white font-bold text-[42px] leading-[50px]'>Deal of the day </h1>
            </div>

        </div>
    )
}

export default Banner
