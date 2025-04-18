import Link from "next/link"

export default function About1() {
    return (
        <>
            <section className="about-area tg-motion-effects section-py-120">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-xl-5 col-lg-6">
                            <div className="about__images">
                                <img className="small-img tg-motion-effects3" src="/assets/img/others/about_img02.png" alt="img" />
                                <img className="big-img" src="/doc7.png" alt="img" />
                                <div className="about__exp">
                                    <svg width={126} height={108} viewBox="0 0 126 108" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 10C0 4.47715 4.47715 0 10 0H110.996C116.321 0 120.713 4.17312 120.983 9.4914L125.429 96.7793C125.733 102.754 120.758 107.657 114.789 107.267L9.34719 100.369C4.08901 100.025 0 95.6593 0 90.3899V10Z" fill="currentcolor" />
                                    </svg>
                                    <h4 className="year">23+</h4>
                                    <p>Years of Experiences</p>
                                </div>
                                <img src="/assets/img/others/about_dots.svg" alt="svg" className="dots tg-motion-effects2" />
                                <svg className="circle tg-motion-effects1" width={344} height={344} viewBox="0 0 344 344" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x={20} y={20} width={304} height={304} rx={152} stroke="currentcolor" strokeWidth={40} />
                                </svg>
                            </div>
                        </div>
                        <div className="col-xl-7 col-lg-6">
                            <div className="about__content">
                                <div className="section__title">
                                    <span className="sub-title">Get To Know About Us</span>
                                    <h2 className="title tg-svg">Unlock Your <span className="position-relative"><span className="svg-icon" id="svg-3" data-svg-icon="assets/img/icons/title_shape.svg" />Global Education </span>
                                           Dream with Vtrain!</h2>
                                </div>
                                <p className="desc">Aiming for the courses in USA, UK, France or MBBS/MD? Vtrain Global Studies makes your international study journey seamless. For 20+ years, we've been your dedicated advocate, prioritizing your best interests.
We offer comprehensive support: personalized counseling, strategic admissions, simplified visa guidance, and a smooth transition (airport pickup, accommodation, and orientation).
                                    <ul>
                                       <strong> Why Vtrain?</strong>
<li><strong>Your Advocate:</strong>We work for you.</li> 
<li><strong>Strategic Applications:</strong> Maximizing your chances at the right universities.</li>
<li><strong>Scholarship Success:</strong> Helping students secure significant funding in the USA , UK & France.</li>
<li><strong>Expert Guidance:</strong> Over two decades of trusted experience.</li>
<li><strong>Credible Partner:</strong> Registered MSME company.</li>

</ul>Your global future starts here. Let Vtrain make it happen!

                                </p>
                                <ul className="about__info-list list-wrap">
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-support" /></div>
                                        <p className="content">100+ <br /> Expert consultants</p>
                                    </li>
                                    
                                    <li className="about__info-list-item">
                                        <div className="icon"><i className="flaticon-graduation-cap" /></div>
                                        <p className="content">1000+ <br /> Over Students</p>
                                    </li>
                                    
                                </ul>
                                <div className="tg-button-wrap">
                                    <Link href="/about-us" className="btn tg-svg"><span className="text">Discover More</span> <span className="svg-icon" id="about-btn" data-svg-icon="assets/img/icons/btn-arrow.svg" /></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
