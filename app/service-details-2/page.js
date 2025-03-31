'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details_Two() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Refinance & Refix">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details">First Home Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2" className='current'>Refinance & Refix <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3">Construction Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-4">Investment Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-5">Asset Finance <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-6">Business Finance<i className="icon-42"></i></Link></li>
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
                                    <span className="sub-title mb_10">Refinance & Refix</span>
                                    <h2>Unlock the potential in your existing mortgage</h2>
                                    <p className="mt_20">At FM Northshore, we specialise in helping homeowners like you make the most of their mortgages. Whether you’re looking to reduce your payments, access equity, or switch to a better rate, our expert team is here to guide you every step of the way.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/assetfinance.jpg" alt=""/></figure>
                                <div className="text-box mb_110">
                                    <p className="mb_25">We’ll help you navigate the refinancing process to secure better rates or terms. Our in-depth market knowledge and strong lender relationships ensure you get the most advantageous deal, potentially saving you thousands over your loan term.</p>
                                    {/* <p>Leveraging an extensive network and advanced assessment tools, executive search firms meticulously evaluate candidates’ qualifications, experience, and leadership capabilities. The process includes rigorous interviews, reference checks, and often psychometric testing to ensure a comprehensive evaluation.</p> */}
                                </div>
                                <div className="text-box mb_70">
                                    <h2>Our Refinancing & Refixing process​</h2>
                                    {/* <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p> */}
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Comprehensive review</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Tailored refinance options</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Seamless transition</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/review.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Comprehensive review</h6>
                                                    <p>Our mortgage experts will conduct a thorough analysis of your current loan, financial situation, and future goals. We’ll identify opportunities for savings and explain how refinancing or refixing could benefit you.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/refin.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Tailored refinance options</h6>
                                                    <p>Based on our review, we’ll research and compare a wide range of lenders and loan products. We’ll present you with the best refinancing or refixing options, clearly explaining the benefits and considerations of each.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/home-loan.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Seamless transition</h6>
                                                    <p>Once you’ve chosen your new loan, we’ll manage the entire refinancing process for you. From paperwork to liaising with lenders, we’ll handle every detail, ensuring a smooth transition to your new, optimised mortgage.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p className="mb_25">Lorem ipsum dolor sit amet consectetur. Mi luctus at sapien viverra enim pharetra augue. Aliquam tellus amet est amet in non sem adipiscing urna. Neque etiam eu pellentesque velit ultricies dictumst mauris tortor hac.</p>
                                    <p>Elit morbi maecenas sit viverra nibh elementum bibendum arcu a. Suscipit magna vitae nulla aenean suspendisse scelerisque montes.</p>
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