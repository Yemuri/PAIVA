import './crianca.css'

import Carousel from 'react-bootstrap/Carousel'

// IMAGENS 
import Image1 from '../../images/kids1.jpg'
import Image2 from '../../images/kids2.jpg'
import Image3 from '../../images/kids3.jpg'

export default function CarrosselCrianca() {
    return (
        <div className='cont-geral'>
            <Carousel className='cont-items' slide={true}>
                <Carousel.Item interval={8000}>
                    <img src={Image1} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Image2} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Image3} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}