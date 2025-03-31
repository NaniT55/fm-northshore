'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Testimonial from '@/components/sections/home5/Testimonial'
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Our Services">

            <section className="service-section centred pt_110 pb_90">
                <div className="auto-container">
                    <div className="sec-title pb_60 sec-title-animation animation-style2">
                        <span className="sub-title mb_10 title-animation">Our Services</span>
                        <h3 className="title-animation">From first-home buyers to property investors, and those looking to refinance or secure business funding, our experienced advisers are here to guide you towards your financial goals.</h3>
                    </div>
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-2"><img src="assets/images/service/home-loan.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-2"><img src="assets/images/service/home-loan.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-2">First Home Loans</Link></h3>
                                        <p>We help you navigate the exciting journey of buying your first home. Our experts ensure you have a smooth experience.</p>
                                        <div className="btn-box"><Link href="/service-details-2" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details"><img src="assets/images/service/refinance.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details"><img src="assets/images/service/refinance.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details">Refinance & Refix</Link></h3>
                                        <p>We make refinancing or fixing your mortgage straightforward. Get better rates and terms to match your current goals.</p>
                                        <div className="btn-box"><Link href="/service-details" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-6"><img src="assets/images/service/construct-loans.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-6"><img src="assets/images/service/construct-loans.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-6">Construction Loans</Link></h3>
                                        <p>We guide you through the complexities of financing your build. From land purchase to final inspection.</p>
                                        <div className="btn-box"><Link href="/service-details-6" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-4"><img src="assets/images/service/investment-loans.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-4"><img src="assets/images/service/investment-loans.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-4">Investment Loans</Link></h3>
                                        <p>We provide insightful advice and tailored solutions for your investment property needs.</p>
                                        <div className="btn-box"><Link href="/service-details-4" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-5"><img src="assets/images/service/assetfin.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-5"><img src="assets/images/service/assetfin.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-5">
                                        Asset Finance</Link></h3>
                                        <p>Whether you’re looking to expand your business, upgrade equipment, our expert advisers are here to help.</p>
                                        <div className="btn-box"><Link href="/service-details-5" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 service-block">
                            <div className="service-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><Link href="/service-details-3"><img src="assets/images/service/business-loans.jpg" alt=""/></Link></figure>
                                        <figure className="overlay-image"><Link href="/service-details-3"><img src="assets/images/service/business-loans.jpg" alt=""/></Link></figure>
                                    </div>
                                    <div className="lower-content">
                                        <h3><Link href="/service-details-3">
                                        Business Finance</Link></h3>
                                        <p>Whether it’s start-up funding or capital for expansion, we tailor our support to meet your business’s unique needs.</p>
                                        <div className="btn-box"><Link href="/service-details-3" className="theme-btn btn-one">View Details</Link></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* <section className="dueal-section service-page p_relative pt_110 pb_120">
                <div className="bg-color"></div>
                <div className="shape">
                    <div className="shape-1"></div>
                    <div className="shape-2"></div>
                    <div className="shape-3"></div>
                    <div className="shape-4"></div>
                </div>
                <figure className="image-layer-1 p_absolute l_150 b_0"><img src="assets/images/resource/women-1.png" alt=""/></figure>
                <figure className="image-layer-2 p_absolute r_150 b_0"><img src="assets/images/resource/men-1.png" alt=""/></figure>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="hiring-content align-3 mr_60">
                                <h2>Professions Hiring</h2>
                                <p>This dynamic hiring landscape presents a wealth of opportunities for professionals across</p>
                                <Link href="/service" className="theme-btn btn-one">Professions</Link>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="hiring-content light ml_45">
                                <h2>Industries Hiring</h2>
                                <p>The current job market is dynamic, with numerous industries actively seeking new talent</p>
                                <Link href="/service" className="theme-btn btn-one">Industries</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Testimonial/> */}
            {/* <div className='pb_120'></div> */}
            <Subscribe/>

            </Layout>
        </div>
    )
}