'use client'
import Link from "next/link"


export default function Banner(){
    return (
        <> 

        <section className="banner-section banner-style-two p_relative">
            <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-5.png)" }}></div>
            <div className="pattern-layer-2" style={{ backgroundImage: "url(assets/images/shape/shape-4.png)" }}></div>
            <div className="bg-layer" style={{ backgroundImage: "url(assets/images/banner/freepik__upload__23000.png)" }}></div>
            <div className="outer-container">
                <div className="content-box">
                    <h2>Your Trusted <span>Mortgage </span>Advisors</h2>
                    <p>Navigate the path to your dream home with FM Northshore’s expert guidance. Get free, personalised advice from our experienced team to unlock your home buying potential today.</p>
                    <div className="btn-box">
                        <Link href="/contact" className="theme-btn btn-one mr_20"><span>Get in Touch</span></Link>
                        <Link href="/service" className="theme-btn banner-btn">View Services</Link>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
