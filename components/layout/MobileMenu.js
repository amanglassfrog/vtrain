import Link from "next/link"
import { useState } from "react"
export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }

    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="/">Home </Link>
                </li>
                <li ><Link href="/mbbs-abroad">MBBS Abroad</Link>
                                                   
                                                </li>
                <li className=""><Link href="#">Courses</Link>
                   </li>
                <li className=""><Link href="/about-us">About Us</Link>
                    
                    </li> <li className=""><Link href="/contact">contact</Link></li> 
                
            </ul>
        </>
    )
}
