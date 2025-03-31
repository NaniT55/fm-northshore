'use client'
import React from 'react'
import Link from "next/link"

export default function Service(){
    return (
        <> 
            <section className="service-section centred pt_120 pb_90">
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Use our Tools</span>
                        <h2 className="title-animation">Plan your future with FM Northshore's financial tools</h2>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/repayment-calculator"><img src="assets/images/service/img14.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/repayment-calculator"><img src="assets/images/service/img14.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/repayment-calculator">Repayments Calculator</Link></h3>
                                        <p>Estimate your potential home loan repayments or discover the savings.</p>
                                        <div className="btn-box"><Link href="/repayment-calculator" className="theme-btn btn-one">Calculate mortgage repayments</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/refinance-calculator"><img src="assets/images/service/img15.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/refinance-calculator"><img src="assets/images/service/img15.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/refinance-calculator">Refinance Calculator</Link></h3>
                                        <p>Determine your borrowing capacity to kickstart your property adventure.</p>
                                        <div className="btn-box"><Link href="/refinance-calculator" className="theme-btn btn-one">Calculate refinance savings</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/amortisation-calculator"><img src="assets/images/service/img16.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/amortisation-calculator"><img src="assets/images/service/img16.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/amortisation-calculator">Amortisation Calculator</Link></h3>
                                        <p>Learn how much money you pay in principal and interest over time.</p>
                                        <div className="btn-box"><Link href="/amortisation-calculator" className="theme-btn btn-one">Calculate time</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
  )
}
