import { useEffect } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
const Hero = () => {
    // This setting object is a configuration object for React Slick (Slick Carousel).It tells the slider how it should behave and look.
    const settings = {
        dots: true,  /*Shows navigation dots below the slider.It Indicate how many slides exist ,Let the user jump to a specific slide. If false, dots will be hidden. */
        infinite: true, /* Enables infinite looping.After the last slide, it goes back to the first.Slider never “stops”. If false, slider stops at the last slide. */
        speed: 600,  /* Controls slide animation speed. value is in millseconds*/
        slidesToShow: 1,/* Number of slides visible at once.Only one slide is shown at a time */
        slidesToScroll: 1, /*Number of slides moved on each action.Clicking arrow or dot moves 1 slide at a time */
        arrows: false,/*Hides previous/next arrow buttons */
        autoplay: true,
        autoplaySpeed: 2000,

    }
    /*AOS needs real DOM elements to exist so it can attach scroll listeners and apply animation classes.
    useEffect runs after the component is rendered to the DOM, so it is the correct place to initialize AOS
    If you initialize AOS outside useEffect, it can run too early (before DOM is ready), or run repeatedly on every render. */
    useEffect(() => {
        AOS.init({  //This starts AOS and sets global animation options.simple “Hey AOS, start watching the page and animate elements that have data-aos attributes.”
            offset: 100, //Offset controls when the animation triggers.Animation will start when the element is 100px before it enters the viewport (approximately).
            duration: 500, //length of the animation in milliseconds
            easing: 'ease-in-out',// animation will starts slow → goes faster in the middle → ends slow

        })

        AOS.refresh();
        /*Recalculate all positions and re-scan elements.
               In React, content may change after the first render, like,components load later
               images load later and change layout,product cards render from data,conditional rendering shows/hides sections*/
    }, [])
    return (
        /* this is the main div section for the hero */
        <div id='hero' className='w-full lg:h-[600px] h-[400px] flex justify-center items-center'>
            {/* this slider will shows multiple pieces of images or content one by one by sliding them */}
            {/* we also pass all the settings of sliders to the slider component as props */}
            <Slider className='w-full'  {...settings}>
                {/* this div is 1st slide */}
                <div>
                    {/* this div is  for background image and all the elements which are under this div can be arranged in column order with gap 10 and items will be at the start  */}
                    <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[400px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${dslr})` }}>
                        {/* AOS.init() After init, AOS scans the page for elements that have data-aos and applies the corresponding animation CSS/classes.data-aos the value "zoom-in" is a keyword defined by AOS and the animations will apply for all the three headings and button */}
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-(--theme-yellow) rounded-lg border-(--theme-yellow) text-xl py-2 px-6 border-2'>Get Upto 80% discount</h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='flex flex-col text-white lg:text-[100px] text-[40px] uppercase font-bold lg:leading-[120px] leading-[70px] '>DSLR 360 <span>camera</span></h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>100% trusted <span className='text-(--theme-yellow) font-semibold'>Electronic Gadgets</span></h1>
                        <button data-aos="zoom-in" data-aos-delay="50" className='bg-(--theme-yellow) text-black font-semibold text-xl px-6 py-3 border rounded-lg'>Online Collections</button>
                    </div>
                </div>
                {/* this div is 2nd slide */}

                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[400px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${headset})` }}>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-(--theme-yellow) rounded-lg border-(--theme-yellow) text-xl py-2 px-6 border-2'>Get Upto 80% discount</h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='flex flex-col text-white lg:text-[100px] text-[40px] uppercase font-bold lg:leading-[120px] leading-[70px] '>headset <span>camera</span></h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>100% trusted <span className='text-(--theme-yellow) font-semibold'>Electronic Gadgets</span></h1>
                        <button data-aos="zoom-in" data-aos-delay="50" className='bg-(--theme-yellow) text-black font-semibold text-xl px-6 py-3 border rounded-lg'>Online Collections</button>

                    </div>
                </div>
                {/* this div is 3rd slide */}

                <div>
                    <div className='w-full lg:px-20 px-5 lg:h-[600px] h-[400px] flex flex-col justify-center items-start gap-10 bg-cover bg-center' style={{ backgroundImage: `url(${earbuds})` }}>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-(--theme-yellow) rounded-lg border-(--theme-yellow) text-xl py-2 px-6 border-2'>Get Upto 80% discount</h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='flex flex-col text-white lg:text-[100px] text-[40px] uppercase font-bold lg:leading-[120px] leading-[70px] '>wireless <span>Earbuds</span></h1>
                        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white text-2xl'>100% trusted <span className='text-(--theme-yellow) font-semibold'>Electronic Gadgets</span></h1>
                        <button data-aos="zoom-in" data-aos-delay="50" className='bg-(--theme-yellow) text-black font-semibold text-xl px-6 py-3 border rounded-lg'>Online Collections</button>

                    </div>
                </div>
            </Slider>
        </div>
    )
}

export default Hero
