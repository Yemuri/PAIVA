import Carousel from 'react-bootstrap/Carousel'

import "./carrosselIdoso.css";

// IMAGENS
import Img1 from '../../images/1.png'
import Img2 from '../../images/2.png'
import Img3 from '../../images/3.png'
import Img4 from '../../images/4.png'
import Img5 from '../../images/5.png'
import Img6 from '../../images/6.png'
import Img7 from '../../images/7.png'
import Img8 from '../../images/8.png'
import Img9 from '../../images/9.png'
import Img10 from '../../images/10.png'
import Img11 from '../../images/11.png'
import Img12 from '../../images/12.png'
import Img13 from '../../images/13.png'
import Img14 from '../../images/14.png'
import Img15 from '../../images/15.png'

export default function CarrosselIdoso() {
    return(
        <div className="carrosselIdoso">
            <Carousel className='cont-items' slide={true}>
                <Carousel.Item interval={8000}>
                    <img src={Img1} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img2} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img3} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img4} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img5} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img6} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img7} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img8} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img9} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img10} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img11} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img12} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img13} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img14} alt="" />
                </Carousel.Item>
                <Carousel.Item interval={8000}>
                    <img src={Img15} alt="" />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}