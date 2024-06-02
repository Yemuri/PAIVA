import Carousel from 'react-bootstrap/Carousel'
import Img1 from '../../images/1.jpeg'
import Img2 from '../../images/2.jpeg'
import Img3 from '../../images/3.jpeg'
import Img4 from '../../images/4.jpeg'
import Img5 from '../../images/5.jpeg'
import Img6 from '../../images/6.jpeg'
import Img7 from '../../images/7.jpeg'
import Img8 from '../../images/8.jpeg'
import Img9 from '../../images/9.jpeg'
import Img10 from '../../images/10.jpeg'
import Img11 from '../../images/11.jpeg'
import Img12 from '../../images/12.jpeg'
import Img13 from '../../images/13.jpeg'
import Img14 from '../../images/14.jpeg'
import Img15 from '../../images/15.jpeg'

import "./inicioIdoso.css";
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
    )
}