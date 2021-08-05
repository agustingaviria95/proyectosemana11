import './carousel.css';
import carousel1 from '../../assets/img/carousel-1.jpg';
import carousel2 from '../../assets/img/carousel-2.jpg';
function Carousel() {
    return (
    <section className="principal">
        <div className="slider">
            <ul>
                <li>
                <img src={carousel1} alt="Background"/>
                </li>
                <li>
                <img src={carousel2} alt="Background"/>
                </li>
            </ul>
        </div>
    </section>
    );
}

export default Carousel;