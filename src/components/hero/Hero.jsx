import Slides from './slides';
import Category from './categories';
import { MantineProvider } from '@mantine/core';
import './hero.css'

function Hero() {
    return (
        <div className="hero">
            <Category />
            <MantineProvider>
                <Slides />
            </MantineProvider>
        </div>
    );
}

export default Hero;