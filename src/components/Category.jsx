import { useEffect } from 'react'
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.jpg'
import cat3 from '../assets/cat3.jpg'
import cat4 from '../assets/cat4.jpg'
import cat5 from '../assets/cat5.jpg'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Category = () => {
    useEffect(() => {
        AOS.init({  //This starts AOS and sets global animation options.simple “Hey AOS, start watching the page and animate elements that have data-aos attributes.”
            offset: 100, //Offset controls when the animation triggers.Animation will start when the element is 100px before it enters the viewport (approximately).
            duration: 500, //length of the animation in milliseconds
            easing: 'ease-in-out',// animation will starts slow → goes faster in the middle → ends slow

        })

        AOS.refresh();

    }, [])
    return (
        // this div contains the category whole section so the all categories on largescreen it will be column direction else row
        <div id='category' className='w-full bg-gray-100 lg:px-20 px-5 pt-[120px] pb-[60px] flex flex-col  justify-center items-center'>

            <div data-aos="zoom-in" data-aos-delay="50" className='w-full flex flex-col justify-center  items-center gap-[20px]'>
                <h1 className='text-(--theme-purple) font-semibold text-xl text-center'>Favourite items</h1>
                <h1 className='text-[42px] font-semibold text-center leading-[50px]'>Popular Category</h1>
                <button className='bg-(--theme-purple) hover:bg-(--theme-yellow) hover:text-black text-white font-semibold text-xl mt-6 border rounded-lg px-8 py-3'>VIEW ALL</button>
            </div>

            <div className='lg:w-[85%] w-full grid lg:grid-cols-5 grid-cols-1 justify-center  items-start gap-10 mt-10'>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 transition-transform hover:scale-110 duration-100 ease-in-out'>
                    <img src={cat1} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black font-semibold lg:text-xl text-3xl hover:text-(--theme-purple)'>Portable Speakers</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 transition-transform hover:scale-110 duration-100 ease-in-out'>
                    <img src={cat2} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black font-semibold lg:text-xl text-3xl hover:text-(--theme-purple)'>Portable Speakers</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 transition-transform hover:scale-110 duration-100 ease-in-out'>
                    <img src={cat3} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black font-semibold lg:text-xl text-3xl hover:text-(--theme-purple)'>Portable Speakers</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 transition-transform hover:scale-110 duration-100 ease-in-out'>
                    <img src={cat4} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black font-semibold lg:text-xl text-3xl hover:text-(--theme-purple)'>Portable Speakers</h1>
                </div>
                <div data-aos="zoom-in" data-aos-delay="200" className='flex flex-col justify-center items-center gap-6 transition-transform hover:scale-110 duration-100 ease-in-out'>
                    <img src={cat5} alt="" className='rounded-full cursor-pointer' />
                    <h1 className='text-black font-semibold lg:text-xl text-3xl hover:text-(--theme-purple)'>Portable Speakers</h1>
                </div>
            </div>
        </div>
    )
}

export default Category
