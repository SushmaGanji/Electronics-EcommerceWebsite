import { useEffect } from 'react'
import insta1 from '../assets/insta-1.jpg'
import insta2 from '../assets/insta-2.jpg'
import insta3 from '../assets/insta-3.jpg'
import insta4 from '../assets/insta-4.jpg'
import insta5 from '../assets/insta-5.jpg'
import insta6 from '../assets/insta-6.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Insta = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div className='w-full lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center gap-4 bg-white '>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-(--theme-purple) text-xl font-semibold capitalize'>
                Our Instagram Shop
            </h1>
            <h1 data-aos="zoom-in" data-aos-delay="100" className='text-black font-semibold text-[42px] leading-[50px] text-center capitalize'>Follow on Instagram</h1>
            <div className='w-full grid lg:grid-cols-6 grid-col-1 gap-6 mt-8 justify-center items-center'>
                <img src={insta1} className='rounded-lg'></img>
                <img src={insta2} className='rounded-lg'></img>
                <img src={insta3} className='rounded-lg'></img>
                <img src={insta4} className='rounded-lg'></img>
                <img src={insta5} className='rounded-lg'></img>
                <img src={insta6} className='rounded-lg'></img>
            </div>
            <button className='bg-(--theme-purple) hover:bg-(--theme-yellow) text-white hover:text-black border rounded-lg px-6 py-2 text-xl font-semibold mt-12'>#ELectraShop</button>
        </div>
    )
}

export default Insta
