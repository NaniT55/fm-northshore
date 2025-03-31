'use client'
import { useState } from "react"
import Link from "next/link"


export default function Dueal(){

    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
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

        <section className="dueal-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_two">
                            <div className="content-box mr_100">
                                <div className="sec-title pb_35 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">General Faqs</span>
                                    <h2 className="title-animation">Frequently Asked Questions</h2>
                                    <h6>Everything you need to know about the product and billing. Can’t find the answer you’re looking for? Please chat to our friendly team.</h6>
                                </div>
                                {/* <div className="inner-box">
                                    <div className="single-item">
                                        <span className="count-text">1</span>
                                        <h3><Link href="/index-2">Sign up, It's Free!</Link></h3>
                                        <p>Our team will set up your account and help you build job to  easy-to-use web dashboard.</p>
                                    </div>
                                    <div className="single-item">
                                        <span className="count-text">2</span>
                                        <h3><Link href="/index-2">Find best Deals and Invest</Link></h3>
                                        <p>Create and post anywhere from 1-100 job openings with just a few clicks. customize your own.</p>
                                    </div>
                                    <div className="single-item">
                                        <span className="count-text">3</span>
                                        <h3><Link href="/index-2">Get you profit back</Link></h3>
                                        <p>View bios, reviews, and rosters before workers arrive on the job, and post reviews and pay, effortlessly.</p>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_three">
                            <div className="content-box">
                                <div className="sec-title pb_30 sec-title-animation animation-style2">
                                    {/* <span className="sub-title mb_10 title-animation">General Faqs</span> */}
                                    {/* <h2 className="title-animation">Frequently Asked Questions</h2> */}
                                </div>
                                <ul className="accordion-box">
                                    <li className="accordion block active-block">
                                        <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(1)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>How does FM Northshore differ from going directly to a bank for a mortgage?</h4>
                                        </div>
                                        <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>As mortgage advisers, we have access to a wide range of lenders and products, not just one bank’s offerings. This means we can shop around on your behalf to find the best deal that suits your unique situation. We also provide personalised advice and support throughout the entire process, from application to settlement and beyond.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(2)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>I'm a first-time home buyer. Can FM Northshore help me understand the process?</h4>
                                        </div>
                                        <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>Absolutely! We specialise in guiding first-time buyers through the home buying journey. Our team will explain each step of the process in plain language, help you understand your borrowing capacity, and assist with everything from pre-approval to settlement. We’re here to answer all your questions and make your first home purchase as smooth as possible.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(3)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>Does FM Northshore charge fees for its services?</h4>
                                        </div>
                                        <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>In most cases, our services comes at no direct cost to you. We receive commissions from lenders when a loan settles. However, we always prioritise finding the best solution for your needs, regardless of our commission. In some complex cases, a fee may apply, but we’ll always discuss this with you upfront before proceeding.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="accordion block">
                                        <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"} onClick={() => handleToggle(4)}>
                                            <div className="icon-box"><i className="icon-21"></i></div>
                                            <h4>Can FM Northshore help with other financial services besides mortgages?</h4>
                                        </div>
                                        <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                                            <div className="content">
                                                <p>Yes, we offer a comprehensive range of financial services. Besides mortgages, we can assist with business loans, and general financial planning. Our holistic approach means we can help you create a complete financial strategy that addresses all aspects of your financial life.</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
