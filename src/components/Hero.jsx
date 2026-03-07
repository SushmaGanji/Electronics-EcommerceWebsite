import React, { useEffect } from 'react'
import Slider from "react-slick"

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import headset from "../assets/headset.jpg";
import earbuds from '../assets/earbuds.jpg';
import dslr from '../assets/dslr.jpg';
import AOS from 'aos';
import 'aos/dist/aos.css'
import Aos from 'aos';
const Hero = () => {
    // This setting object is a configuration object for React Slick (Slick Carousel).It tells the slider how it should behave and look.
    const settings = {
        dots: true,  /*Shows navigation dots below the slider.It Indicate how many slides exist ,Let the user jump to a specific slide. If false, dots will be hidden. */
        infinite: true, /* Enables infinite looping.After the last slide, it goes back to the first.Slider never “stops”. If false, slider stops at the last slide. */
        speed: 500,  /* Controls slide animation speed. value is in millseconds*/
        slidesToShow: 1,/* Number of slides visible at once.Only one slide is shown at a time */
        slidesToScroll: 1, /*Number of slides moved on each action.Clicking arrow or dot moves 1 slide at a time */
        arrows: false /*Hides previous/next arrow buttons */
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
        AOS.refresh(); /*Recalculate all positions and re-scan elements.
        In React, content may change after the first render, like,components load later
        images load later and change layout,product cards render from data,conditional rendering shows/hides sections*/
    }, [])
    return (
        <div>
            Hero
        </div>
    )
}

export default Hero
