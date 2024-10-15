import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';

function Slides() {
    const Sdata = [
        {
            id: 1,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/slide-1.png",
        },
        {
            id: 2,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/slide-2.png",
        },
        {
            id: 3,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/slide-3.png",
        },
        {
            id: 4,
            title: "50% Off For Your First Shopping",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.",
            cover: "./images/SlideCard/slide-4.png",
        },
    ]

    let slidecar = Sdata.map((item) => {
        return (
            <Carousel.Slide>
                <div className="s-item" key={item.id}>
                    <div className="slide-info">
                        <h1 className="title">{item.title}</h1>
                        <p className="desc">{item.desc}</p>
                    </div>
                    <img src={item.cover} alt="" className="slide-img" />
                </div>

            </Carousel.Slide>
        );
    })

    const autoplay = useRef(Autoplay({ delay: 3000 }));
    return (
        <div className="slider-container">
            <Carousel
                withIndicators={false} // Hide indicators
                slideSize={{ base: '100%', sm: '50%', md: '100%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}// Enable auto-slide
                
                styles={{
                    controls: {
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'space-between',
                        top: '60%', // Center vertically
                        transform: 'translateY(-50%)',
                    },
                    control: {
                        width: 30, // Increase the width
                        height: 30, // Increase the height
                        backgroundColor: '#fff',
                        color: '#007bff',
                        border: '1px solid #007bff',
                        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
                        borderRadius: '50%', // Make them round
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        transition: 'background-color 0.2s ease',
                    },
                    controlActive: {
                        backgroundColor: '#007bff', // Change background on active
                        color: '#fff',
                    },
                }}
            >
                {slidecar}
            </Carousel>
        </div>
    );
}

export default Slides;