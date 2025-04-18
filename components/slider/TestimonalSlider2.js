import Slider from "react-slick"

const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: false,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: (
        <button type="button" className="slick-prev">
            <i className="flaticon-chevron"></i>
        </button>
    ),
    nextArrow: (
        <button type="button" className="slick-next">
            <i className="flaticon-chevron"></i>
        </button>
    ),
}

export default function TestimonalSlider2() {
    return (
        <>
            <Slider {...settings} className="testimonial-active">
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“ From the moment I contacted Vtrain, my dream of studying MBBS/MD abroad felt achievable. Their guidance on the application process for Russia was thorough and their visa assistance was invaluable. I'm now studying at my dream university, all thanks to their support!
 “</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Priya Sharma (MBBS/MD in Russia)</h4>
                        
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“ Vtrain simplified the complex process of applying for my MS in Data Science in the USA. Their personalized counseling helped me choose the right university, and their guidance on my Statement of Purpose was crucial. I even received a significant scholarship!
“</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Vikram Singh (MS in Data Science, USA)</h4>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“  I was initially overwhelmed by the MBA application process in the UK. Vtrain provided expert advice on university selection, essay writing, and even interview preparation. Their strategic approach helped me get into my top-choice business school.
 “</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Aditi Nair (MBA, UK)</h4>
                        
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“ Vtrain made my dream of pursuing B.Tech in France a reality. Their team patiently guided me through the academic requirements and the application process. Their support made the entire experience much less stressful.
“</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">
Siddharth Gupta (B.Tech, France)
</h4>
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“  I highly recommend Vtrain Global Studies for anyone considering studying abroad. Their team provided excellent support for my M.Tech application in the USA, from shortlisting universities to reviewing my application documents. Their insights were invaluable.
“</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Ananya Desai (M.Tech, USA)</h4>
                        
                    </div>
                </div>
                <div className="testimonial__item">
                    <div className="testimonial__quote">
                        <img src="/assets/img/icons/quote02.png" alt="icon" />
                    </div>
                    <div className="testimonial__rating">
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                        <i className="fas fa-star" />
                    </div>
                    <p>“ Choosing Vtrain was a game-changer for my MS in AI application in the UK. Their counselors understood my academic profile and career goals perfectly. Their guidance on my Letter of Recommendation and overall application strategy was top-notch. Thank you, Vtrain!
“</p>
                    <div className="testimonial__avatar">
                        <h4 className="name">Dhruv Sharma (MS in AI, UK)</h4>
                    </div>
                </div>
            </Slider>
        </>
    )
}
