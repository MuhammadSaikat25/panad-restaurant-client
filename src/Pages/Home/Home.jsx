import SectionTitle from '../../Utils/SectionTitle';
import carouselImg from '../../assets/home/01.jpg'
import carouseImg2 from '../../assets/home/02.jpg'
import carouseImg3 from '../../assets/home/03.png'
import carouseImg4 from '../../assets/home/04.jpg'
import OrderOnline from './OrderOnline';
import Restaurant from './Restaurant';

const Home = () => {
    return (
        <>
            {/*  ========= Header Section==========  */}

            <header>
                <div className="carousel w-full">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={carouselImg} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide4" className="btn btn-circle">❮</a>
                            <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img src={carouseImg2} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide1" className="btn btn-circle">❮</a>
                            <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={carouseImg3} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide2" className="btn btn-circle">❮</a>
                            <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img src={carouseImg4} className="w-full" />
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                            <a href="#slide3" className="btn btn-circle">❮</a>
                            <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

            </header>

            {/* ========= OrderOnline Section======== */}
            <div className="max-w-6xl w-full mx-auto">
                <SectionTitle header={'---From 11:00am to 10:00pm---'} subHeading={'ORDER ONLINE'}></SectionTitle>
                <OrderOnline></OrderOnline>
            </div>

            {/* ==============Panda Restaurant section============ */}
            <div className="max-w-6xl w-full mx-auto">
                <Restaurant></Restaurant>
            </div>


        </>
    );
};

export default Home;