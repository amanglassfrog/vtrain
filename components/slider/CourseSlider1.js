import Link from "next/link"
import Slider from "react-slick"

const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-prev slick-arrow slick-prev" +
        (currentSlide === 0 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === 0 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-left"></i>
    </button>
  );
  const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
    <button
      {...props}
      className={
        "slick-next slick-arrow" +
        (currentSlide === slideCount - 1 ? " slick-disabled" : "")
      }
      aria-hidden="true"
      aria-disabled={currentSlide === slideCount - 1 ? true : false}
      type="button"
    >
      <i className="fas fa-arrow-right"></i>
    </button>
  );


const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: <SlickArrowLeft />,
    nextArrow: <SlickArrowRight />,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                centerMode: true,
                centerPadding: '110px',
                arrows: false,
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                centerMode: false,
                centerPadding: '0',
            }
        },
    ]
}

export default function CourseSlider1() {
    return (
        <>
            <section {...settings} className="row courses-slider-active">
                <div className="col-lg-12 col-xl-3">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/course-details" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb01.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author001.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#E8F9EF', color: '#04BC53' }}>Medical</Link>
                            <h5 className="title"><Link href="/course-details">MBBS/MD (Bachelor of Medicine, Bachelor of Surgery) </Link></h5>
                            
                            <div className="courses__item-bottom">
                                
                                <div className="courses__item-rating">
                                    <i className="fas fa-star" />
                                    <span className="rating-count">(4.2)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-3">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/course-details" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb02.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author002.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#F7EEFA', color: '#BC18E4' }}>Marketing</Link>
                            <h5 className="title"><Link href="/course-details">MBA (Master of Business Administration)</Link></h5>
                            
                            <div className="courses__item-bottom">
                                
                                <div className="courses__item-rating">
                                    <i className="fas fa-star" />
                                    <span className="rating-count">(4.8)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-3">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/course-details" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb03.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author003.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#FFF0F9', color: '#FF109F' }}>Technology</Link>
                            <h5 className="title"><Link href="/course-details">M.TECH (Master of Technology)</Link></h5>
                            
                            <div className="courses__item-bottom">
                               
                                <div className="courses__item-rating">
                                    <i className="fas fa-star" />
                                    <span className="rating-count">(4.7)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-12 col-xl-3">
                    <div className="courses__item-two shine__animate-item">
                        <div className="courses__item-two-thumb">
                            <Link href="/course-details" className="shine__animate-link">
                                <img src="/assets/img/courses/course_thumb04.jpg" alt="img" />
                            </Link>
                            <div className="author">
                                <Link href="#"><img src="/assets/img/courses/course_author004.png" alt="img" /></Link>
                            </div>
                        </div>
                        <div className="courses__item-two-content">
                            <Link href="#" className="courses__item-tag" style={{ backgroundColor: '#FFF3D3', color: '#F5B204' }}>Development</Link>
                            <h5 className="title"><Link href="/course-details">MS (Master of Science)</Link></h5>
                            
                            <div className="courses__item-bottom">
                                
                                <div className="courses__item-rating">
                                    <i className="fas fa-star" />
                                    <span className="rating-count">(5.0)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </section>
        </>
    )
}
