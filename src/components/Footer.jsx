import client1 from '../assets/client1.png'
import client2 from '../assets/client2.png'
import client3 from '../assets/client3.png'
import client4 from '../assets/client4.png'
import client5 from '../assets/client5.png'
import client6 from '../assets/client6.png'
import pay1 from '../assets/pay-1.jpg'
import pay2 from '../assets/pay-2.jpg'
import pay3 from '../assets/pay-3.jpg'
import pay4 from '../assets/pay-4.jpg'
import google from '../assets/google.jpg'
import apple from '../assets/apple.jpg'
import { Link } from 'react-scroll'
import { FaArrowUp } from 'react-icons/fa'
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { CiGlobe } from "react-icons/ci";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react'
const Footer = () => {
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div id='contact' className='w-full flex flex-col justify-center items-center'>
            {/* 1st box starts here */}
            <div data-aos="zoom-in" data-aos-delay="100" className='w-full bg-(--theme-purple) grid lg:grid-cols-6 grid-cols-2 justify-center items-center gap-10 lg:px-20 px-6 py-8'>
                <img src={client1} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
                <img src={client2} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
                <img src={client3} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
                <img src={client4} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
                <img src={client5} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
                <img src={client6} className='w=[130px] opacity-70 hover:opacity-100 cursor-pointer'></img>
            </div>
            {/* 1st box end here */}
            {/* 2nd box starts here */}
            <div className='w-full flex justify-center items-center lg:gap-3 gap-10 lg:px-20 px-6 py-[80px] bg-gray-100'>
                <div data-aos="zoom-in" data-aos-delay="100" className='flex flex-col gap-10 justify-center items-start grow>
'>
                    <div className='flex flex-col gap-4 justify-center items-center'>
                        <h1 className='text-4xl text-(--theme-purple) font-bold underline italic'>ElectraShop</h1>
                        <p className='text-gray-500 text-justify'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam ipsam quaerat atque itaque aperiam ipsa veniam temporibus fugit ad quia obcaecati maiores commodi, vitae dolores ex expedita vel odio repellendus eum! Corrupti officiis dolorem porro quia quibusdam natus reprehenderit temporibus nemo id. Vel, earum. Assumenda voluptas suscipit in ducimus quae!</p>
                    </div>
                    <div className='flex flex-col gap-4 justify-center items-center mx-auto'>
                        <h1 className='text-xl font-bold text-center capitalize'>Download our app</h1>
                        <div className='flex justify-center items-center gap-4 hover:cursor-pointer'>
                            <img src={google}></img>
                            <img src={apple}></img>
                        </div>
                    </div>
                </div>
            </div>
            {/* 2nd box end here */}
            {/* 3rd box starts here */}
            <div className='w-full lg:px-20 px-6 py-[80px] bg-gray-100'>
                <hr className='border-t border-gray-300 py-3' />
                <div className='w-full flex justify-center items-center gap-4 bg-gray-100'>
                    <img src={pay1} className='w-[100px] rounded-lg'></img>
                    <img src={pay2} className='w-[100px] rounded-lg'></img>
                    <img src={pay3} className='w-[100px] rounded-lg'></img>
                    <img src={pay4} className='w-[100px] rounded-lg'></img>

                </div>

            </div>
            {/* 3rd box end here */}
            {/* 4rth box start here */}
            <div className='grid lg:grid-cols-2 grid-cols-1 lg:px-10 px-6 py-[80px] gap-[220px] '>
                <div className='flex flex-col gap-10 justify-center items-start'>
                    <h1 data-aos="zoom-in" data-aos-delay="50" className='text-(--theme-purple) underline font-bold text-3xl italic'>Get in touch</h1>
                    <div data-aos="zoom-in" data-aos-delay="50" className="flex gap-6 items-center justify-center opacity-50 hover:opacity-100"> <FaTwitter size={25} /><span className="font-semibold text-2xl">Home</span></div>
                    <div data-aos="zoom-in" data-aos-delay="50" className="flex gap-6 items-center justify-center opacity-50 hover:opacity-100"> <FaFacebook size={25} /><span className="font-semibold text-2xl">Facebook</span></div>
                    <div data-aos="zoom-in" data-aos-delay="50" className="flex gap-6 items-center justify-center opacity-50 hover:opacity-100"> <FaPhoneAlt size={25} /><span className="font-semibold text-2xl">Phone</span></div>
                    <div data-aos="zoom-in" data-aos-delay="50" className="flex gap-6 items-center justify-center opacity-50 hover:opacity-100"> <IoIosMail size={25} /><span className="font-semibold text-2xl">Mail</span></div>
                    <div data-aos="zoom-in" data-aos-delay="50" className="flex gap-6 items-center justify-center opacity-50 hover:opacity-100"> <CiGlobe size={25} /><span className="font-semibold text-2xl">OurWebsite</span></div>

                </div>
                <div className='flex flex-col gap-10'>
                    <h1 data-aos="zoom-in" data-aos-delay="50" className='text-3xl italic font-bold text-(--theme-purple) underline capitalize'>Subscribe to our news letter</h1>
                    <input data-aos="zoom-in" data-aos-delay="50" type='text' className='border-gray-400  bg-gray-200 outline-none text-black border-20px rounded-lg px-6 py-5' placeholder='send an email' />
                    <button data-aos="zoom-in" data-aos-delay="50" className='w-[50%] mx-auto bg-(--theme-yellow) text-black font-semibold text-xl px-4 py-2 border rounded-lg'>Submit</button>
                </div>
            </div>
            {/* 4rth box end here */}
            {/* go to top */}
            <div id='icon-box' className='bg-(--theme-purple) text-white p-3 rounded-full hover:bg-(--theme-yellow) hover:text-black cursor-pointer fixed  lg:bottom-6 bottom-6 right-6 '>
                <Link to="hero" spy={true} offset={-100} smooth={true}>
                    <FaArrowUp size={30} />
                </Link>
            </div>

        </div>
    )
}

export default Footer
// padding: 1rem;
// background: rgba(28, 30, 58, 1);
// display: flex;
// align - items: center;
// justify - content: center;
// width: 65rem;
// border - radius: 20px;
// }

// input {
//     background: transparent;
//     border: none;
//     width: calc(100 % - 3rem);
//     outline: none;
//     color: white;