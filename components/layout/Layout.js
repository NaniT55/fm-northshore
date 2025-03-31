
// 'use client'
// import { useEffect, useState } from "react"
// import BackToTop from '../elements/BackToTop'
// import DataBg from "../elements/DataBg"
// import Breadcrumb from './Breadcrumb'
// import SearchPopup from "./SearchPopup"
// import Sidebar from "./Sidebar"
// import Header1 from "./header/Header1"
// import Header2 from './header/Header2'
// import Header3 from "./header/Header3"
// import Header4 from "./header/Header4"
// import Header5 from "./header/Header5"
// import Footer1 from './footer/Footer1'
// import Footer2 from './footer/Footer2'
// import Footer3 from './footer/Footer3'
// import Footer4 from './footer/Footer4'
// import Footer5 from './footer/Footer5'
// import WOW from 'wowjs';



// export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, wrapperCls }) {
//     const [scroll, setScroll] = useState(0)
//     // Mobile Menu
//     const [isMobileMenu, setMobileMenu] = useState(false)
//     const handleMobileMenu = () => {
//         setMobileMenu(!isMobileMenu)
//         !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
//     }

//     // Popup
//     const [isPopup, setPopup] = useState(false)
//     const handlePopup = () => setPopup(!isPopup)

//     // Sidebar
//     const [isSidebar, setSidebar] = useState(false)
//     const handleSidebar = () => setSidebar(!isSidebar)

//     useEffect(() => {
//         const WOW = require('wowjs')
//         window.wow = new WOW({
//             live: false
//         })
//         window.wow.init()

//         document.addEventListener("scroll", () => {
//             const scrollCheck = window.scrollY > 100
//             if (scrollCheck !== scroll) {
//                 setScroll(scrollCheck)
//             }
//         })
//     }, [])
//     return (
//         <>
//             <DataBg />
//             <div className={`page-wrapper ${wrapperCls ? wrapperCls : ""}`} id="#top">
//                 {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}
//                 {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
//                 {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}


//                 <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
//                 <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

//                 {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

//                 {children}

//                 {!footerStyle && < Footer1 />}
//                 {footerStyle == 1 ? < Footer1 /> : null}
//                 {!footerStyle && < Footer2 />}
//                 {footerStyle == 2 ? < Footer2 /> : null}
//                 {!footerStyle && < Footer3 />}
//                 {footerStyle == 3 ? < Footer3 /> : null}
//                 {!footerStyle && < Footer4 />}
//                 {footerStyle == 4 ? < Footer4 /> : null}
//                 {!footerStyle && < Footer5 />}
//                 {footerStyle == 5 ? < Footer5 /> : null}
//             </div>
//             <BackToTop scroll={scroll} />
//         </>
//     )
// }

'use client'  // ✅ This must be at the top!

import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import SearchPopup from "./SearchPopup"
import Sidebar from "./Sidebar"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from './footer/Footer3'
import Footer4 from './footer/Footer4'
import Footer5 from './footer/Footer5'

export default function Layout({ headerStyle, footerStyle, breadcrumbTitle, children, wrapperCls }) {
    const [scroll, setScroll] = useState(0);
    const [isMobileMenu, setMobileMenu] = useState(false);
    const [isPopup, setPopup] = useState(false);
    const [isSidebar, setSidebar] = useState(false);

    // Mobile Menu Toggle
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu);
        document.body.classList.toggle("mobile-menu-visible", isMobileMenu);
    };

    // Popup Toggle
    const handlePopup = () => setPopup(!isPopup);

    // Sidebar Toggle
    const handleSidebar = () => setSidebar(!isSidebar);

    useEffect(() => {
        if (typeof window !== "undefined") {
            import("wowjs").then((module) => {
                new module.WOW().init();
            });

            const handleScroll = () => {
                setScroll(window.scrollY > 100);
            };

            window.addEventListener("scroll", handleScroll);
            return () => window.removeEventListener("scroll", handleScroll);
        }
    }, []);

    return (
        <>
            <DataBg />
            <div className={`page-wrapper ${wrapperCls || ""}`} id="#top">
                {headerStyle === 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle === 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle === 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle === 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {headerStyle === 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} /> : null}
                {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} handlePopup={handlePopup} isSidebar={isSidebar} handleSidebar={handleSidebar} />}

                <Sidebar isSidebar={isSidebar} handleSidebar={handleSidebar} />
                <SearchPopup isPopup={isPopup} handlePopup={handlePopup} />

                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}

                {footerStyle === 1 ? <Footer1 /> : null}
                {footerStyle === 2 ? <Footer2 /> : null}
                {footerStyle === 3 ? <Footer3 /> : null}
                {footerStyle === 4 ? <Footer4 /> : null}
                {footerStyle === 5 ? <Footer5 /> : null}
                {!footerStyle && <Footer1 />}
                
                <BackToTop scroll={scroll} />
            </div>
        </>
    );
}
