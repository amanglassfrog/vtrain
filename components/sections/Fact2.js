import CounterUp from "../elements/CounterUp"

export default function Fact2() {
    return (
        <>
            <section className="fact-area fact-bg" data-background="/assets/img/bg/fact_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5 col-lg-7 col-md-9">
                            <div className="section__title text-center mb-50">
                                <span className="sub-title">Worldwide Our Achievement</span>
                                <h2 className="title tg-svg">It’s Time To Grow Your Skills & Build Your Career </h2>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fact__item-two text-center">
                                <div className="fact__icon-two">
                                    <i className="flaticon-webinar" />
                                </div>
                                <div className="fact__content-two">
                                    <h3 className="count"><CounterUp end={2} />K+</h3>
                                    <p>Students Enrolled</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fact__item-two text-center">
                                <div className="fact__icon-two">
                                    <i className="flaticon-graduates" />
                                </div>
                                <div className="fact__content-two">
                                    <h3 className="count"><CounterUp end={10} />+</h3>
                                    <p>Top  Courses</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-6">
                            <div className="fact__item-two text-center">
                                <div className="fact__icon-two">
                                    <i className="flaticon-countries" />
                                </div>
                                <div className="fact__content-two">
                                    <h3 className="count"><CounterUp end={10} />+</h3>
                                    <p> Countries</p>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </section>
        </>
    )
}
