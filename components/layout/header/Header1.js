import Link from "next/link"
import MobileMenu from "../MobileMenu"
import { Menu } from '@headlessui/react'
export default function Header3({ scroll, isMobileMenu, handleMobileMenu }) {
    return (
        <>
            <div id="header-fixed-height" />
            <header className="tg-header__style-three">
                <div className="tg-header__top">
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-md-6">
                                <ul className="tg-header__top-info list-wrap">
                                    <li><i className="flaticon-pin" /> <span>94, Gobind Nagar , Racecourse (Near Gurudwara) Dehradun 248001</span></li>
                                    <li><i className="flaticon-email" /> <Link href="mailto:vglobalmbbs@gmail.com">vglobalmbbs@gmail.com</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <ul className="tg-header__top-social list-wrap">
                                    
                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-whatsapp" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="sticky-header" className={`tg-header__area ${scroll ? "sticky-menu" : ""}`}>
                    <div className="container custom-container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler" onClick={handleMobileMenu}><i className="tg-flaticon-menu-1" /></div>
                                <div className="tgmenu__wrap d-flex ">
                                    <nav className="tgmenu__nav">
                                        <div className="logo bold">
                                            
                                            <Link href="/"><img src="/vlogo.png" alt="Logo" className="h-12"/></Link>
                                        </div>
                                       
                                        
                                       
                                    </nav>
                                    <div className="tgmenu__navbar-wrap tgmenu__main-menu d-none d-xl-flex">
                                            <ul className="navigation new">
                                                <li className="active "><Link href="#">Home</Link>
                                                   
                                                </li>
                                                <li className=""><Link href="/courses">Courses</Link>
                                                   
                                                </li>
                                                <li className=""><Link href="/about-us">About Us</Link>
                                                   
                                                </li>
                                               <li className=""><Link href="/contact">contact</Link></li> 
                                                
                                            </ul>
                                        </div>
                                </div>
                                {/* Mobile Menu  */}
                                <div className="tgmobile__menu">
                                    <nav className="tgmobile__menu-box">
                                        <div className="close-btn" onClick={handleMobileMenu}><i className="tg-flaticon-close-1" /></div>
                                        <div className="nav-logo">
                                            <Link href="/"><img src="/vlogo.png" alt="Logo" /></Link>
                                        </div>
                                       
                                        <div className="tgmobile__menu-outer">
                                            <MobileMenu />
                                        </div>
                                        {/* <div className="tgmenu__action">
                                            <ul className="list-wrap">
                                                <li className="header-btn login-btn"><Link href="#" className="btn">Log in</Link></li>
                                                <li className="header-btn"><Link href="#" className="btn">Try For Free</Link></li>
                                            </ul>
                                        </div> */}
                                        <div className="social-links">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-linkedin-in" /></Link></li>
                                                <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tgmobile__menu-backdrop" onClick={handleMobileMenu} />
                                {/* End Mobile Menu */}
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
