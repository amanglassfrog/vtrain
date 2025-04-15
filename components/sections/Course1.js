
import dynamic from 'next/dynamic'
import Link from "next/link"
const PortfolioFilter1 = dynamic(() => import('../elements/PortfolioFilter1'), {
    ssr: false,
})

export default function Course1() {
    return (
        <>
            <section className="courses-area section-pt-120 section-pb-90">
                <div className="container">
                    <div className="section__title-wrap">
                <div className="row align-items-end">
                    <div className="col-lg-6">
                        <div className="section__title text-center text-lg-start">
                            <span className="sub-title">What We Do</span>
                            <h2 className="title tg-svg">Our <span className="position-relative"><span className="svg-icon" id="svg-4" data-svg-icon="assets/img/icons/title_shape.svg" />Featured</span>
                                Services</h2>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        {/* <div className="courses__nav-active">
                            <button className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All Courses <span>New</span></button>
                            <button className={activeBtn("cat-one")} onClick={handleFilterKeyChange("cat-one")}>Design</button>
                            <button className={activeBtn("cat-two")} onClick={handleFilterKeyChange("cat-two")}>Marketing</button>
                            <button className={activeBtn("cat-three")} onClick={handleFilterKeyChange("cat-three")}>Development</button>
                        </div> */}
                    </div>
                </div>
                    </div>
                     <div className="row justify-content-center">
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="fact__item-two text-center">
                                                    <div className="fact__icon-two">
                                                        <i className="flaticon-webinar" />
                                                    </div>
                                                    <div className="fact__content-two">
                                                        <h3 className="count">Career Counselling Service</h3>
                                                        {/* <p>Students Enrolled</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="fact__item-two text-center">
                                                    <div className="fact__icon-two">
                                                        <i className="flaticon-graduates" />
                                                    </div>
                                                    <div className="fact__content-two">
                                                        <h3 className="count">Admission & Confirmation Service</h3>
                                                        {/* <p>Top Class Courses</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="fact__item-two text-center">
                                                    <div className="fact__icon-two">
                                                        <i className="flaticon-countries" />
                                                    </div>
                                                    <div className="fact__content-two">
                                                        <h3 className="count">Visa Lodgement Service</h3>
                                                        {/* <p>World Countries</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-6 col-md-6 col-sm-6">
                                                <div className="fact__item-two text-center">
                                                    <div className="fact__icon-two">
                                                        <i className="flaticon-trophy" />
                                                    </div>
                                                    <div className="fact__content-two">
                                                        <h3 className="count">Pre-Departure Briefing Service</h3>
                                                        {/* <p>Award We Received</p> */}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                    
                </div>
                <div className="courses__shapes">
                    <div className="courses__shapes-item alltuchtopdown"><img src="/assets/img/courses/course_shape01.png" alt="shape" /></div>
                    <div className="courses__shapes-item alltuchtopdown"><img src="/assets/img/courses/course_shape02.png" alt="shape" /></div>
                </div>
            </section>
        </>
    )
}
