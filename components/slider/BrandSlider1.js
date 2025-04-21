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
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/france.png" alt="brand" /></Link>
                                                <h4 className="text-center">France</h4>

                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/Kazakhstan.svg" alt="brand" /></Link>
                                                <h4 className="text-center">Kazakhstan</h4>

                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-center">
                        <Link href="#"><img src="/kyrgyzstan.webp" alt="brand" /></Link>
                        <h4 className="text-center">Kyrgyzstan</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-center">
                        <Link href="#"><img src="/nepal.png" alt="brand" /></Link>
                        <h4 className="text-center">Nepal</h4>
                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/philli.png" alt="brand" /></Link>
                                                <h4 className="text-center">Philippines </h4>

                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/russia.png" alt="brand" /></Link>
                                                <h4 className="text-center">Russia</h4>

                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/uk.webp" alt="brand" /></Link>
                                                <h4 className="text-center">United Kingdom</h4>

                    </div>
                </div>
                <div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/usa.webp" alt="brand" /></Link>
                                                <h4 className="text-center">United States Of America</h4>

                    </div>
                </div><div className="col">
                    <div className="brand__item flex flex-col justify-center items-cente">
                        <Link href="#"><img src="/uzbekistan.jpeg" alt="brand" /></Link>
                                                <h4 className="text-center">Uzbekistan</h4>

                    </div>
                </div>
                
            </Slider>
        </>
    )
}
