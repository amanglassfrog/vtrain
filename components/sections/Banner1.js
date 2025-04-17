import Link from "next/link"

export default function Banner1() {
    return (
        <>
            <section className="banner-area banner-bg" data-background="/assets/img/banner/banner_bg.jpg">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="banner__content">
                                <img src="/assets/img/banner/bshape_01.png" alt="shape" className="shape alltuchtopdown" />
                                <img src="/assets/img/banner/bshape_02.png" alt="shape" className="shape" />
                                <span className="sub-title" >100% Satisfaction
                                    Guarantee</span>
                                <h3 className="title tg-svg"  >Step into medicine with an  <span className="position-relative"><span className="svg-icon" id="svg-2" data-svg-icon="assets/img/icons/title_shape.svg" />MBBS degree abroad. </span> </h3>
                                <p >Established in 2002, Vtrain Global Studies brings over 23 years of ethical and transparent guidance to students aspiring for international education. We specialize in facilitating admissions to quality MBBS programs in destinations like Russia, Kyrgyzstan, and more, alongside pathways to renowned institutions in the USA and UK.</p>
                                <div className="banner__btn-wrap"  >
                                    <div className="tg-button-wrap">
                                        <Link href="/courses" className="btn tg-svg"><span className="text">Explore Courses</span>
                                            <span className="svg-icon" id="svg-1" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                    </div>
                                    <div className="banner__phone">
                                        <i className="flaticon-phone-call" />
                                        <div className="number-info">
                                            <span>Have any Question?</span>
                                            <h6 className="number"><Link href="tel:+91 9999 256 360">+91 9999 256 360</Link></h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="banner__images">
                                <img src="/doc6.png" alt="img"  />
                                <img src="/assets/img/banner/bshape_03.png" alt="shape" className="shape" data-aos="fade-down-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_04.png" alt="shape" className="shape" data-aos="fade-right" data-aos-delay={1200} />
                                <img src="/assets/img/banner/bshape_05.png" alt="shape" className="shape" data-aos="fade-down-left" data-aos-delay={1200} />
                                <div className="banner__fact">
                                    
                                    <div className="banner__fact-item">
                                        <div className="icon">
                                            <i className="flaticon-graduation-cap" />
                                        </div>
                                        <div className="info">
                                            <span>Complete Graduation</span>
                                            <h4 className="count">34K</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
