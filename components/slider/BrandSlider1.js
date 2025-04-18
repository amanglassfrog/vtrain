import Link from "next/link"
import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 2,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                arrows: false,
            }
        },
    ]
}

export default function BrandSlider1() {
    return (
        <>
            <Slider {...settings} className="row brand-active">
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo1.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo2.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo3.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo4.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo5.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo6.png" alt="brand" /></Link>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item">
                        <Link href="#"><img src="/logo8.png" alt="brand" /></Link>
                    </div>
                </div>
                
            </Slider>
        </>
    )
}
