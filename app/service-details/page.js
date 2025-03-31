'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="First Home Loans">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details" className="current">First Home Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2">Refinance & Refix <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3">Construction Loans<i className="icon-42"></i></Link></li>
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
                                    <span className="sub-title mb_10">First Home Loans</span>
                                    <h2>Turn your dream of owning a home into reality</h2>
                                    <p className="mt_20">At FM Northshore, we understand that buying your first home is a significant milestone. Our expert team is dedicated to guiding you through every step of the process, ensuring you get the best loan to suit your needs.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/asset-finance.jpg" alt=""/></figure>
                                {/* <div className="text-box mb_110">
                                    <p className="mb_25">It begins with a thorough understanding of the company’s needs, culture, and long-term vision, ensuring that the search is precisely targeted.</p>
                                    <p>Leveraging an extensive network and advanced assessment tools, executive search firms meticulously evaluate candidates’ qualifications, experience, and leadership capabilities. The process includes rigorous interviews, reference checks, and often psychometric testing to ensure a comprehensive evaluation.</p>
                                </div> */}
                                <div className="text-box mb_70">
                                    <h2>Our First Home Loan process​</h2>
                                    {/* <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p> */}
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Free consultation​</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Tailored loan solutions</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Application and approval</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/consultation.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Free consultation​</h6>
                                                    <p>Our experienced advisers will meet with you to understand your financial situation, goals, and preferences. We’ll explain the home buying process, discuss loan options, and answer all your questions to ensure you feel confident moving forward.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/solution.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Tailored loan solutions</h6>
                                                    <p>Based on your unique circumstances, we’ll research and compare a wide range of lenders and loan products. We’ll present you with the best options, clearly explaining the benefits and considerations of each, so you can make an informed decision.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/approval.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Application and approval</h6>
                                                    <p>Once you’ve chosen your loan, we’ll handle the entire application process for you. From paperwork to liaising with lenders, we’ll manage every detail, keeping you updated at each stage until your loan is approved and you’re ready to make an offer on your dream home.</p>
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