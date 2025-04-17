import Allcourses from "@/components/courses/Allcourses"
import FilterCourses from "@/components/courses/FilterCourses"
import Layout from "@/components/layout/Layout"
import { useState } from "react"
import Link from "next/link"

export default function Courses() {
    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Our Courses">
                <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">MBBS</span>
                                            <h2 className="title tg-svg">MBBS (Bachelor of Medicine, Bachelor of Surgery) </h2>
                                        </div>
                                        <p className="fw-medium">MBBS is a popular undergraduate course for students aspiring to become doctors. </p>
                                        <p>In this course, students learn a broad range of medical disciplines, including anatomy, physiology, biochemistry, pharmacology, and clinical practice. The course duration typically spans 5 to 6 years, depending on the country.</p>
                                                                            <p>For More Information contact us today.</p>
    
                                    <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/mbbs.jpeg" alt="img" className="cimage" />
                                        </div>
                                       
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                 <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/u12.png" alt="img" />
                                        </div>
                                        
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">MS</span>
                                            <h2 className="title tg-svg">MS (Master of Science)</h2>
                                        </div>
                                        <p className="fw-medium">The MS program is one of the most sought-after postgraduate courses, offering specializations in various fields, including Computer Science, Data Science, Engineering, etc. </p>
                                        <p>The MS degree prepares students for leadership roles in research, technology, and academia.</p>
                                        <p>For More Information contact us today.</p> <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                </section>
                <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">MBA</span>
                                            <h2 className="title tg-svg">MBA (Master of Business Administration)</h2>
                                        </div>
                                        <p> Thinking about boosting your career with a Master of Business Administration from a top university overseas? This guide will tell you about the usual documents and qualifications you'll need to apply for MBA programs in the United States, the United Kingdom, and France. This isn't a business lesson, but it's the first step in planning your international MBA journey!</p>
                                                                            
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/MBA.png" alt="img" className="cimage" />
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
                                            <span className="sub-title">Your Path to a World-Class Business Degree
</span>
                                            
                                        </div>
                                        <p> Just like understanding different markets is important in business, knowing what each country wants for MBA applications will help you succeed. Let's look at the general things you'll need.
</p>
                                                                            
                                    <p>Quick Guide to Your Global MBA Application </p> 
                                    <ul>
<li><strong>Common Essentials:</strong>Bachelor's degree + transcripts, 2-5 years work experience, GMAT/GRE (check requirements), English proficiency (if needed), essays, 2-3 recommendations, resume/CV, interview (possibly), proof of funds, and a valid passport.</li> 
<li><strong>USA Highlights:</strong> Degree, GMAT/GRE (sometimes waived), TOEFL/IELTS (if applicable), resume, essays, 2 recommendations, transcripts.</li>
<li><strong>UK Highlights:</strong> Recognized degree (3-year min.), 2-3 years work experience (management preferred), GMAT (sometimes GRE/own test), IELTS (6.0-6.5) or similar, statement of purpose, 2-3 recommendations.</li>
<li><strong>France Highlights:</strong> Equivalent degree, GMAT/GRE (sometimes waived/own test), TOEFL/IELTS/PTE (if applicable), resume, essays, recommendations, transcripts, and proof of funds.</li>
<li><strong>Key Takeaway:</strong> This is a starting point. Always verify specific requirements with your target universities in the USA, UK, and France. Plan your global MBA journey today!</li>

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
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                 <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/u12.png" alt="img" />
                                        </div>
                                        
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">BTECH</span>
                                            <h2 className="title tg-svg">BTech (Bachelor of Technology)</h2>
                                        </div>
                                        <p className="fw-medium">The BTech degree provides students with a solid foundation in various engineering disciplines.</p>
                                        <p> It covers everything from design to practical implementation of engineering concepts.</p>
                                                                                                                   <p>For More Information contact us today.</p>
 <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                </section>
                <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">DS</span>
                                            <h2 className="title tg-svg">Data Science</h2>
                                        </div>
                                        <p className="fw-medium">Data Science involves the use of scientific methods, algorithms, and systems to extract insights from structured and unstructured data.</p>
                                        <p> The course covers machine learning, statistical analysis, and data visualization.</p>
                                                                            <p>For More Information contact us today.</p>
    
                                    <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/mbbs.jpeg" alt="img" className="cimage" />
                                        </div>
                                       
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                 <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/u12.png" alt="img" />
                                        </div>
                                        
                                        <div className="about__shapes">
                                            <img src="/assets/img/objects/about_shape01.png" alt="img" className="about-shape-01" data-aos="fade-down-left" />
                                            <img src="/assets/img/objects/about_shape02.png" alt="img" className="about-shape-02" data-aos="fade-up-right" />
                                            <img src="/assets/img/objects/about_shape03.png" alt="img" className="about-shape-03 rotateme" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">AI</span>
                                            <h2 className="title tg-svg">AI (Artificial Intelligence)</h2>
                                        </div>
                                        <p className="fw-medium">AI focuses on developing intelligent machines that can perform tasks that typically require human intelligence. </p>
                                        <p> This includes areas such as robotics, natural language processing, and deep learning.</p>
                                        <div className="tg-button-wrap">
                                            <Link href="/contact" className="btn tg-svg"><span className="text">Contact us</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                        </div>
                                    </div>
                                </div>
                               
                            </div>
                        </div>
                    </section>

            </Layout>
        </>
    )
}