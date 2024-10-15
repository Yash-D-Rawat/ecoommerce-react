import Data from './deals_data'
import '@mantine/carousel/styles.css';
import { Carousel } from '@mantine/carousel';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { MantineProvider } from '@mantine/core';
import './deals.css'


function Deals({updateCount}) {
    let deals = Data.map((item) => {
        return <Carousel.Slide>
            <div className="deal-item" key={item.id}>
                <div className="discount-div">
                <p>{item.discount}% Off</p>
                </div>

                <img src={item.cover} alt="" className="deal-img" />

                <div className="deal-info">
                    <p id='item-name'>{item.name}</p>
                    <p id='item-price'>{item.price}.00 $</p>
                </div>
                
                <button onClick={()=> updateCount(1)}>Add to Cart</button>
            </div>
        </Carousel.Slide>
    })
    return (
        <MantineProvider>
            <div className="deal-container">
                Block buster Deals
                <Carousel
                withIndicators={false} // Hide indicators
                slideSize={{ base: '100%', sm: '50%', md: '25%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"

                styles={{
                    
                    controls: {
                        display: 'flex',
                        justifyContent: 'space-between',
                        top: '50%', // Center vertically
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
                    {deals}
                </Carousel>
            </div>
        </MantineProvider>
    );
}

export default Deals;