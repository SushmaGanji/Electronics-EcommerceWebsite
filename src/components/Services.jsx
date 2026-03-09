import shipping from '../assets/shipping.png'
import payment from '../assets/payment.png'
import refund from '../assets/return.png'
import gift from '../assets/gift.png'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';
const Services = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div className='w-full grid lg:grid-cols-4 grid-cols-1 lg:px-20 px-6 pb-[80px]'>
            <div data-aos="zoom-in" data-aos-delay="50" className='flex flex-col lg:gap-2 gap-4  items-center justify-center cursor-pointer lg:mb-0 mb-10'>
                <img src={shipping} alt="" className='h-20 w-20 mb-6' />
                <h1 className='text-2xl font-semibold hover:bg-(--theme-yellow) px-6 py-2 text-black border bg-slate-500/10 rounded-lg border-(--theme-yellow)'>World Wide Shipping</h1>
                <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="50" className='flex flex-col lg:gap-2 gap-4  items-center justify-center cursor-pointer lg:mb-0 mb-10'>
                <img src={payment} alt="" className='h-20 w-20 mb-6' />
                <h1 className='text-2xl font-semibold hover:bg-(--theme-yellow) px-6 py-2 text-black border bg-slate-500/10 rounded-lg border-(--theme-yellow)'>100% secure payment</h1>
                <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="50" className='flex flex-col lg:gap-2 gap-4 items-center justify-center cursor-pointer lg:mb-0 mb-10'>
                <img src={refund} alt="" className='h-20 w-20 mb-6' />
                <h1 className='text-2xl font-semibold hover:bg-(--theme-yellow) px-6 py-2 text-black border bg-slate-500/10 rounded-lg border-(--theme-yellow)'>World Wide Shipping</h1>
                <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
            </div>
            <div data-aos="zoom-in" data-aos-delay="50" className='flex flex-col lg:gap-2 gap-4  items-center justify-center cursor-pointer lg:mb-0 mb-10'>
                <img src={gift} alt="" className='h-20 w-20 mb-6' />
                <h1 className='text-2xl font-semibold hover:bg-(--theme-yellow) px-6 py-2 text-black border bg-slate-500/10 rounded-lg border-(--theme-yellow)'>World Wide Shipping</h1>
                <p className='text-[17px] text-gray-500'>Lorem ipsum dolor sit amet.</p>
            </div>
        </div>
    )
}

export default Services
