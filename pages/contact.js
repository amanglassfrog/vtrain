import Layout from "@/components/layout/Layout"
import Link from "next/link"

export default function Contact() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle="Contact With Us">
                <div>
                    <section className="contact-area section-py-120">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-5">
                                    <div className="contact-info-wrap">
                                        <h2 className="title">Keep In Touch With Us</h2>
                                        <p>Neque convallis cras semper auctor. Libero id faucibus getnvallis.id faucibus nisl tincidunt egetnvallis.</p>
                                        <ul className="list-wrap">
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-pin-1" />
                                                </div>
                                                <div className="content">
                                                    <p>94, Gobind Nagar , Racecourse (Near Gurudwara) Dehradun 248001</p>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-phone-call" />
                                                </div>
                                                <div className="content">
                                                    <Link href="tel:+91 9999 256 360">+91 9999 256 360</Link>
                                                    <Link href="tel:+91 6396 745 354">+91 6396 745 354</Link>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="icon">
                                                    <i className="flaticon-email" />
                                                </div>
                                                <div className="content">
                                                    <Link href="mailto:dora.girish@gmail.com">dora.girish@gmail.com</Link>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact-form-wrap">
                                        <h4 className="title">Get in Touch</h4>
                                        <form id="contact-form" action="assets/mail.php" method="POST">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="name" type="text" placeholder="Name *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="email" type="email" placeholder="E-mail *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="phone" type="number" placeholder="Phone *" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input name="subject" type="text" placeholder="Your Subject *" required />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="form-grp">
                                                <textarea name="message" placeholder="Message" required />
                                            </div>
                                            <button type="submit" className="btn">Send Message</button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* contact-map */}
                    <div className="contact-map">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.4206079085084!2d78.04270247535575!3d30.31055187479071!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929a329cc68f3%3A0x8c2d74705b2b3b24!2s94%2C%20near%20Race%20Cource%2C%20East%20Rest%20Camp%2C%20Govind%20Nagar%2C%20Race%20Course%2C%20Dehra%20Dun%2C%20Uttarakhand%20248001!5e0!3m2!1sen!2sin!4v1744620396597!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                    </div>
                </div>

            </Layout>
        </>
    )
}