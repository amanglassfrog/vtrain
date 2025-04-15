import Layout from "@/components/layout/Layout"
import About1 from "@/components/sections/About1"
import Banner1 from "@/components/sections/Banner1"
import Blog1 from "@/components/sections/Blog1"
import Brand1 from "@/components/sections/Brand1"
import Categories1 from "@/components/sections/Categories1"
import Course1 from "@/components/sections/Course1"
import Cta1 from "@/components/sections/Cta1"
import Instructor1 from "@/components/sections/Instructor1"
import Newsletter1 from "@/components/sections/Newsletter1"
import Testimonial3 from "@/components/sections/Testimonial3"
import QuickAction1 from "@/components/sections/QuickAction1"
import Fact2 from "@/components/sections/Fact2"
import Course3 from "@/components/sections/Course3"



export default function Home1() {
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <Banner1 />
                <Brand1 />
                <QuickAction1 />
                 <Course3 />
                
                <About1 />
                <Course1 />
                                <Fact2 />
                
                <Categories1 />
                <div className="area-bg" data-background="/assets/img/bg/area_bg.jpg"><Testimonial3 />   </div>
             {/* <Instructor1 /> */}
                {/* <Cta1 /> */}
                {/* <Blog1 /> */}
                {/* <Newsletter1 /> */}
            </Layout>
        </>
    )
}