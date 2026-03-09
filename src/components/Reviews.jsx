import Slider from "react-slick"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { reviewdata } from '../export.js'
import AOS from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from "react";
const Reviews = () => {
    const settings = {
        dots: true,  /*Shows navigation dots below the slider.It Indicate how many slides exist ,Let the user jump to a specific slide. If false, dots will be hidden. */
        infinite: true, /* Enables infinite looping.After the last slide, it goes back to the first.Slider never “stops”. If false, slider stops at the last slide. */
        speed: 600,  /* Controls slide animation speed. value is in millseconds*/
        slidesToShow: 1,/* Number of slides visible at once.Only one slide is shown at a time */
        slidesToScroll: 1, /*Number of slides moved on each action.Clicking arrow or dot moves 1 slide at a time */
        arrows: false,/*Hides previous/next arrow buttons */
        autoplay: false,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }
    useEffect(() => {
        AOS.init({
            offset: 100,
            duration: 500,
            easing: 'ease-in-out',

        })

        AOS.refresh();

    }, [])
    return (
        <div id="testimonials" className="w-full lg:px-20 px-5 py-[80px] bg-gray-100 flex flex-col justify-center items-center gap-4">
            <h1 data-aos="zoom-in" data-aos-delay="100" className="text-(--theme-purple) text-xl font-semibold capitalize">1300+ customer reviews</h1>
            <h1 data-aos="zoom-in" data-aos-delay="2000" className="text-black font-semibold text-[42px] leading-[50px] text-center capitalize">Our Customer Love</h1>
            <div data-aos="zoom-in" data-aos-delay="300" className="w-full mt-10">
                <Slider className="w-full" {...settings}>
                    {
                        reviewdata.map((item, index) =>
                            <div key={index}>
                                <div className="w-full flex flex-col justify-center items-center gap-4 lg:p-10 p-3">
                                    <img src={item.img} className="rounded-full w-[100px] m-auto"></img>
                                    <div className="flex justify-center items-center gap-1">
                                        <FaStar className="text-(--theme-purple)" />
                                        <FaStar className="text-(--theme-purple)" />
                                        <FaStar className="text-(--theme-purple)" />
                                        <FaStar className="text-(--theme-purple)" />
                                        <FaStar className="text-(--theme-purple)" />

                                    </div>
                                    <p className="text-center text-gray-500 text-lg">{item.para}</p>
                                    <div className="flex justify-center items-center gap-5">
                                        <FaQuoteLeft className="fill-(--theme-purple) size-16" />
                                        <div className="w-full flex flex-col justify-center items-start">
                                            <h1 className="text-black text-xl capitalize font-semibold">{item.name}</h1>
                                            <h1 className="text-gray-500 capitalize">{item.post}</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </Slider>
            </div>
        </div>
    )
}

export default Reviews
