import img from '../../assets/home/slide1.jpg'
import img2 from '../../assets/home/slide2.jpg'
import img3 from '../../assets/home/slide3.jpg'
import img4 from '../../assets/home/slide4.jpg'
const OrderOnline = () => {
    return (
        <section>
            <div className="carousel carousel-end rounded-box flex gap-4">
                <div className="carousel-item">
                    <img src={img} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img2} alt="Drink" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="" />
                </div>
                <div className="carousel-item">
                   <img src={img4} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="" />
                </div>
                <div className="carousel-item">
                   <img src={img4} alt="" />
                </div>
                <div className="carousel-item">
                    <img src={img3} alt="" />
                </div>
                <div className="carousel-item">
                   <img src={img4} alt="" />
                </div>
            </div>
        </section>
    );
};

export default OrderOnline;