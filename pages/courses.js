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
                                        <p className="fw-medium">Thinking about pursuing your dream of becoming a doctor in another country? This guide provides you with the key information and a list of the documents you'll generally need to apply for MBBS programs in Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Nepal, the Philippines, Belarus, Poland, Italy, Germany, and Georgia. Think of this as your essential roadmap to international medical studies!
</p>
                                        <p>Just like learning a new skill requires understanding the basics, applying to medical schools in different countries means getting familiar with their specific rules. We're here to help you take that crucial first step towards your medical aspirations.
</p>
                                                                            
    
                                   
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/mbbs.jpg" alt="img" className="cimage" />
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
                                            <span className="sub-title">Country-Specific Documents (General):
</span>
                                            
                                        </div>
                                        
                                                                            
                                   
                                    <ul>
<li><strong>Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Nepal:</strong> Mark sheets, NEET, passport, photos, medical certificate, university letter, visa. Some may need birth certificate, HIV test, or bank statement.
</li> 
<li><strong>Philippines, Belarus, Poland, Italy, Germany, Georgia:</strong>  Expect mark sheets, NEET (for Indians), passport, photos, medical certificate, and likely a police clearance. Check university websites for specifics, including English tests.
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
                    <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                 <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/ms.avif" alt="img" />
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
                                        <p>Thinking about getting your Master of Science degree from a top university overseas to boost your academic journey? This guide tells you about the usual documents and qualifications you'll need to apply for MS programs in the United States, the United Kingdom, and France. Let's help you plan your path to advanced studies!
</p>
                                        
                                    </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 pt-10">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Your Path to a Master's Degree in Science
</span>
                                            
                                        </div>
                                        <p> Just like scientific research needs careful planning, applying for a Master's in different countries means knowing what they're looking for. Here's the key information to get you started.
</p>
                                                                            
                                    <p>Quick Guide to Your Global MS Application </p> 
                                    <ul>
<li><strong>Common Essentials:</strong>Relevant Science Bachelor's + transcripts, good GPA, GRE (often required), English proficiency (if needed: TOEFL/IELTS), statement of purpose/essays, 2-3 recommendations, resume/CV, interview (possibly), proof of funds, valid passport.
</li> 
<li><strong>USA Highlights:</strong> Science/Engineering Bachelor's, GRE (check program), TOEFL/IELTS (if applicable), statement of purpose, 2-3 recommendations, transcripts, resume/CV.</li>
<li><strong>UK Highlights:</strong> Relevant Science Bachelor's (good honors often needed), GRE (sometimes required/preferred), IELTS/TOEFL (if applicable), statement of purpose, 2-3 recommendations, transcripts, resume/CV.</li>
<li><strong>France Highlights:</strong> Relevant Science Bachelor's, GRE (sometimes required), TOEFL/IELTS (for English programs), DELF/DALF (for French programs), statement of purpose/motivation letter, recommendations, transcripts, resume/CV, proof of funds.
</li>
<li><strong>Key Takeaway:</strong> This is a starting point. Always verify specific requirements with your target universities in the USA, UK, and France. Plan your advanced science studies today!
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
                                            <img src="/tech.avif" alt="img" />
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
                                            <span className="sub-title">MTECH</span>
                                            <h2 className="title tg-svg">MTech (Master of Technology)</h2>
                                        </div>
                                        <p className="fw-medium"></p>
                                        <p> Thinking about getting your Master of Technology degree from a top university overseas to boost your engineering career? This guide tells you about the usual documents and qualifications you'll need to apply for M.Tech programs in the United States, the United Kingdom, and France. Let's help you plan your path to advanced engineering studies!
</p>
                                                                                                                  
                                    </div>
                            </div>
                            <div className="col-xl-12 col-lg-12 pt-10">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">Your Path to a Higher Engineering Degree

</span>
                                            
                                        </div>
                                        <p> Just like engineering projects need careful planning, applying for a Master's in different countries means knowing what they're looking for. Here's the key information to get you started.

</p>
                                                                            
                                    <p>Quick Guide to Your Global M.Tech Application (USA, UK, France) </p> 
                                    <ul>
<li><strong>Common Essentials:</strong> Relevant Bachelor's degree + transcripts, good academic record (GPA), GRE (often required), English proficiency (if needed: TOEFL/IELTS), statement of purpose/essays, 2-3 recommendations, resume/CV, interview (possibly), proof of funds, valid passport.</li> 
<li><strong>USA Highlights:</strong> Engineering/science Bachelor's, GRE (check program), TOEFL/IELTS (if applicable), statement of purpose, 2-3 recommendations, transcripts, resume/CV.
</li>
<li><strong>UK Highlights:</strong> Relevant Engineering Bachelor's (good honors often needed), GRE (sometimes required/preferred), IELTS/TOEFL (if applicable), statement of purpose, 2-3 recommendations, transcripts, resume/CV.
</li>
<li><strong>France Highlights:</strong> Relevant Engineering/science Bachelor's, GRE (sometimes required), TOEFL/IELTS (for English programs), DELF/DALF (for French programs), statement of purpose/motivation letter, recommendations, transcripts, resume/CV, proof of funds.
</li>
<li><strong>Key Takeaway:</strong>  This is a starting point. Always verify specific requirements with your target universities in the USA, UK, and France. Plan your advanced engineering studies today!
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
                <section className="about-area-two">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-5 col-lg-6">
                                    <div className="about__title-wrap">
                                        <div className="section__title">
                                            <span className="sub-title">BTECH</span>
                                            <h2 className="title tg-svg">BTech (Bachelor of Technology)</h2>
                                        </div>
                                        <p> Thinking about getting your Bachelor of Technology degree from a top university overseas to start your engineering career? This guide tells you about the usual documents and qualifications you'll need to apply for B.Tech programs in the United States, the United Kingdom, and France. Let's help you plan your path to your undergraduate engineering studies!
</p>
                                                                            
                                    </div>
                                </div>
                                <div className="col-xl-7 col-lg-6 col-md-11">
                                    <div className="about__images-wrap">
                                        <div className="column">
                                            <img src="/btech.avif" alt="img" className="cimage" />
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
                                            <span className="sub-title">Your Path to a Bachelor's Degree in Engineering

</span>
                                            
                                        </div>
                                        <p> Just like engineering designs need careful planning, applying for a B.Tech in different countries means knowing what they're looking for. Here's the key information to get you started.


</p>
                                                                            
                                    <p>Quick Guide to Your Global B.Tech Application </p> 
                                    <ul>
<li><strong>Common Essentials:</strong> High school diploma (good grades in science/math), standardized tests (SAT/ACT for USA, A-Levels/IB for UK, Baccalaureate for France), English proficiency (TOEFL/IELTS if needed), statement/essays (USA often), recommendations (sometimes), resume/CV, interview (possibly), proof of funds, valid passport.</li> 
<li><strong>USA Highlights:</strong> High school transcripts, SAT/ACT, TOEFL/IELTS (if applicable), essays, recommendations (if asked), resume/CV, financial proof.
</li>
<li><strong>UK Highlights:</strong>  High school transcripts/A-Levels/IB, IELTS/TOEFL (if applicable), personal statement (UCAS), academic references (UCAS), resume/CV (sometimes), financial proof.
</li>
<li><strong>France Highlights:</strong> High school transcripts/Baccalaureate, DELF/DALF (French programs), TOEFL/IELTS (English programs), motivation letter, recommendations (if asked), resume/CV, financial proof.
</li>
<li><strong>Key Takeaway:</strong>  This is a starting point. Always verify specific requirements with your target universities in the USA, UK, and France. Start your engineering journey today!

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
                  

            </Layout>
        </>
    )
}