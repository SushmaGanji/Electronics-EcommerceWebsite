import { useEffect } from 'react'
import { MdOutlineRemoveRedEye, MdAddShoppingCart } from "react-icons/md";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { products } from '../export.js'
import AOS from 'aos';
import 'aos/dist/aos.css'
const Productsgrid = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div className='bg-gray-200 w-full lg:px-20 px-5 py-[80px] flex flex-col justify-center items-center gap-4'>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-(--theme-purple) text-xl font-semibold text-center mb-4'>Browse Collections</h1>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-black font-semibold text-[42px] leading-[50px] text-center'>Trending Products</h1>
            <div data-aos="zoom-in" data-aos-delay="50" className='w-full grid lg:grid-cols-4 grid-cols-1 justify-center items-center gap-10 mt-10'>
                {
                    products.map((item, index) => {
                        return (
                            <div id='product-box' key={index} className='flex flex-col gap-1 justify-center items-center bg-white p-2 rounded-lg cursor-pointer relative'>
                                <div id='icons' className='flex justify-center items-center gap-5 absolute top-[20px]'>
                                    <div className='bg-(--theme-purple) hover:bg-(--theme-yellow) hover:text-black rounded-full p-3 text-white'>
                                        <MdOutlineRemoveRedEye />
                                    </div>
                                    <div className='bg-(--theme-purple) hover:bg-(--theme-yellow) hover:text-black rounded-full p-3 text-white'>
                                        <FaRegHeart />
                                    </div>
                                    <div className='bg-(--theme-purple) hover:bg-(--theme-yellow) hover:text-black rounded-full p-3 text-white'>
                                        <MdAddShoppingCart />
                                    </div>
                                </div>
                                <img src={item.img} alt="" className='lg:mt-3' />
                                <h1 className='text-lg text-gray-400 font-semibold'>{item.category}</h1>
                                <h1 className='text-xl font-semibold'>{item.name}</h1>
                                <h1 className='text-lg text-(--theme-purple) font-semibold'>{item.price}</h1>
                                <div className='w-full mt-2'>
                                    <hr className='text-gray-300' />
                                    <div className='flex justify-between items-center gap-6 mt-3'>
                                        <div className='flex justify-start items-center gap-1'>
                                            <FaStar className='text-(--theme-purple)' />
                                            <FaStar className='text-(--theme-purple)' />
                                            <FaStar className='text-(--theme-purple)' />
                                            <FaStar className='text-(--theme-purple)' />
                                            <FaStar className='text-(--theme-purple)' />
                                        </div>


                                        <button className='bg-(--theme-yellow) text-black border rounded-lg px-4 py-1  font-semibold'>Sale 15%</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </div>
            <button data-aos="zoom-in" data-aos-delay="50" className='bg-(--theme-purple) hover:bg-(--theme-yellow) text-white hover:text-black font-semibold px-8 py-3 rounded-lg mt-8'>VIEW MORE</button>
        </div>
    )
}

export default Productsgrid
