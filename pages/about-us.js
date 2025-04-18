import CounterUp from "@/components/elements/CounterUp"
import Layout from "@/components/layout/Layout"
import Link from "next/link"
export default function AboutUs() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="About Us">
                <div>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Who we are</span>
                                            <h2 className="title tg-svg">The Leading Global <span className="position-relative"><span className="svg-icon" id="about-svg" data-svg-icon="assets/img/icons/title_shape.svg" />Marketplace</span> for Learning and Instruction</h2>
                                        </div>
                                        <p >Aiming for the USA, UK, or MBBS/MD in Europe/Asia? Vtrain Global Studies makes your international study journey seamless. For 20+ years, we've been your dedicated advocate, prioritizing your best interests.
We offer comprehensive support: personalized counseling, strategic admissions, simplified visa guidance, and a smooth transition (airport pickup, accommodation, and orientation).
</p>
                                        <p>Imagine studying in the USA, the UK, or pursuing your medical aspirations abroad... At Vtrain Global Studies, we turn those dreams into reality. Born in the serene Himalayas of Dehradun in 2002, our ethical foundation fuels our passion for helping you achieve international success.
</p>
                                        
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/assets/img/others/about_img03.jpg" alt="img" />
                                        </div>
                                        <div className="column">
                                            <img src="/vlogo.png" alt="img" />
                                            <img src="/assets/img/others/about_img05.jpg" alt="img" />
                                        </div>
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                                  <div className="col-xl-12 col-lg-12 pt-10">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Why choose Vtrain? 

</span>
                                            
                                        </div>
                                        <p> Because your success is our only goal. We advocate for you, strategically targeting universities that fit your profile. Our long history includes securing impressive scholarships for students in the USA, UK & FRANCE We're a registered company built on trust and proven results.

</p>
                                                                            
                                   
                                    <ul>
<li><strong>Expert Counseling:</strong> Finding your perfect program and university.</li> 
<li><strong>Seamless Admissions:</strong> Navigating applications with ease.
</li>
<li><strong>Visa Victory:</strong>  Guiding you through the complexities.
</li>
<li><strong>Effortless Arrival:</strong> Airport pickup, accommodation help, and orientation.
</li>


              </ul>                      
                                </div>
                                <p>For More Information contact us today.</p>
    
                                    <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    
                    <section className="fact-area fact-bg" data-background="/assets/img/bg/fact_bg.jpg">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-7 col-md-9">
                                    <div className="section__title text-center mb-50">
                                        <span className="sub-title">Worldwide Our Achievement</span>
                                        <h2 className="title tg-svg">It’s Time To Grow Your Skills & Build Your Career</h2>
                                    </div>
                                </div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-webinar" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={325200} /></h3>
                                            <p>Students Enrolled</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-graduates" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={11399} /></h3>
                                            <p>Top Class Courses</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-countries" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={312} /></h3>
                                            <p>World Countries</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-3 col-md-4 col-sm-6">
                                    <div className="fact__item-two text-center">
                                        <div className="fact__icon-two">
                                            <i className="flaticon-trophy" />
                                        </div>
                                        <div className="fact__content-two">
                                            <h3 className="count"><CounterUp end={590} /></h3>
                                            <p>Award We Received</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                   
                    
                   
                </div>

            </Layout>
        </>
    )
}