import Layout from "@/components/layout/Layout"
import About2 from "@/components/sections/About2"


import Testimonial3 from "@/components/sections/Testimonial3"
import QuickAction1 from "@/components/sections/QuickAction1"

import { useState, useEffect } from "react";



export default function Home1() {
    
    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                
                <About2/>
                <QuickAction1 />
                 
                <div className="area-bg" data-background="/assets/img/bg/area_bg.jpg"><Testimonial3 />   </div>
             {/* <Instructor1 /> */}
                {/* <Cta1 /> */}
                {/* <Blog1 /> */}
                {/* <Newsletter1 /> */}
            </Layout>
        </>
    )
}