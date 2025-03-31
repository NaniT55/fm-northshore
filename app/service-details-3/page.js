'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details_Three() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Construction Loans">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details">First Home Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2">Refinance & Refix <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3" className='current'>Construction Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-4">Investment Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-5">Asset Finance <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-6">Business Finance <i className="icon-42"></i></Link></li>
                                    </ul>
                                </div>
                                {/* <div className="download-widget">
                                    <div className="shape" style={{ backgroundImage: "url(assets/images/shape/shape-24.png)" }}></div>
                                    <div className="inner-box">
                                        <figure className="image-box"><img src="assets/images/resource/book-3.png" alt=""/></figure>
                                        <h4>The 2024 guide for Optimal Content <span>Management</span></h4>
                                        <button type="button" className="theme-btn btn-one">Download E-book</button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                        <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                            <div className="service-details-content">
                                <div className="sec-title mb_70">
                                    <span className="sub-title mb_10">Construction Loans</span>
                                    <h2>Unlock opportunities and drive your business forward</h2>
                                    <p className="mt_20">At FM Northshore, we specialise in helping businesses like yours access the right financing to achieve your growth objectives. Whether you’re a startup seeking capital or an established company looking to expand, our expert team is here to guide you every step of the way.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/img9.jpg" alt=""/></figure>
                                <div className="text-box mb_110">
                                    <p className="mb_25">It begins with a thorough understanding of the company’s needs, culture, and long-term vision, ensuring that the search is precisely targeted.</p>
                                    <p>Leveraging an extensive network and advanced assessment tools, executive search firms meticulously evaluate candidates’ qualifications, experience, and leadership capabilities. The process includes rigorous interviews, reference checks, and often psychometric testing to ensure a comprehensive evaluation.</p>
                                </div>
                                <div className="text-box mb_70">
                                    <h2>Our Business Finance process</h2>
                                    {/* <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p> */}
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Business needs analysis</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Customised finance options</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Seamless application process</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img11.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Business needs analysis</h6>
                                                    <p>Our finance experts will thoroughly assess your business model, financial position, and growth plans. We’ll help you identify the most suitable type of finance to meet your specific needs and objectives.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img13.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Customised finance options</h6>
                                                    <p>Based on our analysis, we’ll research and compare a wide range of lenders and finance products. We’ll present you with the best options, clearly explaining the benefits and considerations of each, including terms, rates, and potential impact on your business.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img2.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Seamless application process</h6>
                                                    <p>Once you’ve chosen your finance solution, we’ll manage the entire application process for you. From compiling documentation to liaising with lenders, we’ll handle every detail, ensuring a smooth journey to securing your business finance.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p className="mb_25">Fuel your business growth with tailored financial solutions. Our team’s commercial lending expertise and strong banking relationships help secure the right funding to support your business objectives and cash flow needs.</p>
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