'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details_Four() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Investment Loans">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details">First Home Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2">Refinance & Refix <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3">Construction Loans
                                        <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-4" className='current'>Investment Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-5">Asset Finance <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-6">Business Finance <i className="icon-42"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="download-widget">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                                    {/* <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/book-3.png" alt=""/></figure>
                                        <h4>The 2024 guide for Optimal Content <span>Management</span></h4>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="service-details-content">
                                <div className="sec-title mb_70">
                                    <span className="sub-title mb_10">Investment Loans</span>
                                    <h2>Unlock opportunities and grow your property portfolio</h2>
                                    <p className="mt_20">At FM Northshore, we specialise in helping investors like you access the right financing to achieve your property investment goals. Whether you’re a first-time investor or expanding your portfolio, our expert team is here to guide you every step of the way.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/img1.jpg" alt=""/></figure>
                                <div className="text-box mb_110">
                                    <p className="mb_25">Our team has in-depth knowledge of the property investment landscape in New Zealand, ensuring you get advice that’s tailored to local market conditions and regulations.</p>
                                    <p>We have strong relationships with a wide range of lenders, including those specialising in investment properties, giving you access to more options and potentially better rates.</p>
                                </div>
                                <div className="text-box mb_70">
                                    <h2>Finding You The Leaders Of Tomorrow</h2>
                                    <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p>
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Investment strategy review</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Customised loan options</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Seamless application process</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img9.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Investment strategy review</h6>
                                                    <p>Our property finance experts will discuss your investment goals, assess your current financial situation, and review your property investment strategy. We’ll help you understand how different loan structures can support your objectives.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img15.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Customised loan options</h6>
                                                    <p>Based on our review, we’ll research and compare a wide range of lenders and investment loan products. We’ll present you with the best options, clearly explaining the benefits and considerations of each, including tax implications and potential returns.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/review.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Seamless application process</h6>
                                                    <p>Once you’ve chosen your investment loan, we’ll manage the entire application process for you. From paperwork to liaising with lenders, we’ll handle every detail, ensuring a smooth journey to securing your investment property.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p className="mb_25">We’ll help you structure your loans optimally, considering factors like tax efficiency, cash flow management, and future portfolio growth.</p>
                                    {/* <p>Elit morbi maecenas sit viverra nibh elementum bibendum arcu a. Suscipit magna vitae nulla aenean suspendisse scelerisque montes.</p> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Subscribe/>

            </Layout>
        </div>
    )
}