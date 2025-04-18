import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer className="footer-bg" data-bg-color="var(--tg-common-color-dark)">
                <div className="footer__top-wrap">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <div className="footer__about">
                                        <div className="footer__logo logo">
                                            <Link href="/"><img src="/vlogo2.png" alt="img" /></Link>
                                        </div>
                                        <p>We help you convert your dreams into reality</p>
                                        <ul className="list-wrap m-0 p-0">
                                            <li className="address">94, Gobind Nagar , Racecourse (Near Gurudwara) Dehradun 248001</li>
                                            <li className="number">+91 9999256360  <br></br>
+91 6396 745 354</li>
                                            <li className="socials">
                                                <Link href="https://www.facebook.com/profile.php?id=100064516433959"><i className="fab fa-facebook-f" /></Link>
                                                <Link href="https://www.instagram.com/girishkumardora/"><i className="fab fa-instagram" /></Link>
                                                {/* <Link href="#"><i className="fab fa-twitter" /></Link> */}
                                               <Link
  href="https://web.whatsapp.com/send?phone=+919999256360&text=Hello"
  className="d-none d-md-block"
>
  <i className="fab fa-whatsapp" />
</Link>

{/* Mobile Only: api.whatsapp.com */}
<Link
  href="https://api.whatsapp.com/send?phone=+919999256360&text=Hello"
  className="d-block d-md-none"
>
  <i className="fab fa-whatsapp" />
</Link>

                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget widget_nav_menu">
                                    <h4 className="fw-title">Resources</h4>
                                    <ul className="list-wrap">
                                        <li><Link href="/about-us">About</Link></li>
                                        <li><Link href="/contact">Contact</Link></li>
                                        
                                        
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="col-xl-4 col-lg-4 col-sm-6">
                                <div className="footer-widget">
                                    <h4 className="fw-title">Working Hours</h4>
                                    <div className="footer__working-list">
                                        <div className="footer__working-item">
                                            <span className="day">Monday to Sunday  </span>
                                            <span className="time">10:30 am to 7:30 pm</span>
                                        </div>
                                        <div className="footer__working-item">
                                            <span className="day">Call/WhatsApp: 9am to 9pm (Same day response) </span></div>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="copyright__wrapper">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="copyright__text">
                                    <p>Copyright © {new Date().getFullYear()}  Vtrain Global Studies. All rights reserved.</p>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
