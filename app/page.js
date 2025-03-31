// import Layout from "@/components/layout/Layout"
// import Banner from "@/components/sections/home1/Banner"
// import Clients from "@/components/sections/home1/Clients"
// import About from "@/components/sections/home1/About"
// import Funfact from "@/components/sections/home1/Funfact"
// import Slide_Text from "@/components/sections/home1/Slide-Text"
// import Chooseus from "@/components/sections/home1/Chooseus"
// import Category from "@/components/sections/home1/Category"
// import Industries from "@/components/sections/home1/Industries"
// import Process from "@/components/sections/home1/Process"
// import Team from "@/components/sections/home1/Team"
// import News from "@/components/sections/home1/News"
// import Subscribe from "@/components/sections/home1/Subscribe"
// export default function Home() {

//     return (
//         <div className="boxed_wrapper">
//             <Layout headerStyle={1} footerStyle={1}>
//                 <Banner/>
//                 <Clients/>
//                 <About/>
//                 <Funfact/>
//                 <Slide_Text/>
//                 <Chooseus/>
//                 <Category/>
//                 <Industries/>
//                 <Process/>
//                 <Team/>
//                 <News/>
//                 <Subscribe/>
//             </Layout>
//         </div>
//     )
// }


import Layout from "@/components/layout/Layout"
import Banner from "@/components/sections/home2/Banner"
import Clients from "@/components/sections/home4/Clients"
import About from "@/components/sections/home2/About"
import Chooseus from "@/components/sections/home2/Chooseus"
import Industries from "@/components/sections/home2/Industries"
import Dueal from "@/components/sections/home2/Dueal"
import Training from "@/components/sections/home2/Training"
import Pricing from "@/components/sections/home2/Pricing"
import Download from "@/components/sections/home2/Download"
import Testimonial from "@/components/sections/home2/Testimonial"
import News from "@/components/sections/home2/News"
import Subscribe from "@/components/sections/home2/Subscribe"
import Director from "@/components/sections/home2/director"

export default function Home_Two() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={2} footerStyle={2}>
                <Banner/>
                <Clients/>
                <About/>
                <Chooseus/>
                <Director/>
                {/* <Industries/> */}
                <Dueal style={{marginTop:"10px"}}/>
                {/* <Training/> */}
                {/* <Pricing/> */}
                {/* <Download/> */}
                {/* <Testimonial/> */}
                {/* <News/> */}
                {/* <Subscribe/> */}
            </Layout>
        </div>
    )
}