import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-6 col-lg-8">
                            <div className="about__images">
                                <img className="big-img" src="/doc3.png" alt="img" />
                                
                                <img src="/assets/img/others/about_dots.svg" alt="svg" className="dots tg-motion-effects2" />
                                <svg className="circle tg-motion-effects1" width={344} height={344} viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={20} y={20} width={304} height={304} rx={152} stroke="currentcolor" strokeWidth={40} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">Get To Know About MBBS/MD Abroad</span>
                                    <h2 className="title tg-svg">Study MBBS/MD Abroad : Unlock Global Opportunities</h2>
                                </div>
                                <p className="desc">With increasing demand for medical professionals worldwide, pursuing MBBS/MD abroad offers an exciting opportunity to receive quality education at a fraction of the cost compared to traditional options. Countries like Russia, Kyrgyzstan, Kazakhstan, Uzbekistan, Nepal, Georgia, Italy, Belarus, and Germany have become top destinations for aspiring doctors. These nations offer globally recognized programs, affordable tuition fees, and simplified entry procedures.

</p>
                                
                                <div className="tg-button-wrap">
                                    <Link href="/contact" className="btn tg-svg"><span className="text">Contact Now</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about-area tg-motion-effects ">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        
                        <div className="col-xl-12 col-lg-12">
                            <div className="about__content">
                                <div className="section__title">
                                   
                                    <h2 className="title tg-svg">Why Choose MBBS/MD Abroad?
</h2>
                                </div>
                                <ul><li className="desc"><strong>Affordable Tuition Fees:</strong> Compared to the expensive costs of studying in countries like the USA or UK, many countries such as Russia, Kyrgyzstan, and Georgia provide affordable MBBS/MD courses that are recognized globally.</li>
                                

<li className="desc"><strong>High-Quality Education:</strong> Medical universities in these countries follow international standards, ensuring you receive quality education and practical training in hospitals.</li>

<li className="desc"><strong>Global Recognition:</strong> MBBS/MD degrees from these countries are recognized by prestigious organizations such as the World Health Organization (WHO), the Medical Council of India (MCI), and the Educational Commission for Foreign Medical Graduates (ECFMG).</li>

<li className="desc"><strong>English-Medium Courses:</strong> Many universities offer MBBS/MD courses in English, making it easier for international students to pursue their dream of becoming a doctor.</li>

<li className="desc"><strong>Simplified Admission Process:</strong> Countries like Russia and Georgia have simplified admission procedures, making it more accessible for students from various countries to apply.</li>
</ul>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <section className="about-area tg-motion-effects ">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        
                        <div className="col-xl-12 col-lg-12">
                            <div className="about__content">
                                <div className="section__title">
                                   
                                    <h2 className="title tg-svg">Countries to Consider for MBBS/MD
</h2>
                                </div>
                                <ul><li className="desc"><strong>Russia:</strong> Home to many globally recognized medical institutions like Moscow State Medical University, Russia offers affordable tuition fees and a rich cultural experience.</li>
                                

<li className="desc"><strong>Kyrgyzstan:</strong> With many institutions offering affordable MBBS programs and low-cost living, Kyrgyzstan has become a popular destination for medical aspirants.</li>

<li className="desc"><strong>Kazakhstan:</strong> Kazakhstans medical universities offer internationally recognized degrees, along with low tuition and living expenses.</li>

<li className="desc"><strong>Uzbekistan:</strong> Known for its high standard of medical education and affordability, Uzbekistan is another top choice for MBBS/MD students.</li>

<li className="desc"><strong>Nepal:</strong> A neighbor to India, Nepal offers cost-effective medical education and has medical universities recognized by the MCI.</li>

                                <li className="desc"><strong>Georgia:</strong> Georgian medical universities offer MBBS/MD programs in English and are recognized by the WHO and MCI, making them a great choice for international students.</li>
<li className="desc"><strong>Italy:</strong> With some of the oldest medical schools in Europe, Italy offers world-class education and an opportunity to experience European culture.</li>
<li className="desc"><strong>Belarus:</strong> Belarus offers affordable tuition fees, high-quality medical education, and is recognized by the WHO.</li>
<li className="desc"><strong>Germany:</strong> Known for its excellent healthcare system, Germany offers MBBS/MD programs with no tuition fees in some universities, making it an attractive destination.</li>

                                </ul>

                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
             <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        
                        <div className="col-xl-12 col-lg-12">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">Get To Know About Us</span>
                                    <h2 className="title tg-svg">Why Vtrain Global Studies for MBBS/MD Abroad?</h2>
                                </div>
                                <p className="desc">Vtrain Global Studies provides expert guidance for students who aspire to pursue MBBS/MD in these countries. From helping you choose the best university to ensuring your application stands out, we are here to make your global education journey smooth and successful.



</p>
                                
                                <div className="tg-button-wrap">
                                    <Link href="/contact" className="btn tg-svg"><span className="text">Contact Now</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
