'use client'
import React from 'react'
import { useState } from "react"
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'

export default function Service_Details_Five() {

    const [activeIndex, setActiveIndex] = useState(1)
    const handleOnClick = (index) => {
        setActiveIndex(index)
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Asset Finance">

            <section className="service-details pt_110 pb_120">
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                            <div className="service-sidebar mr_40">
                                <div className="category-widget mb_40">
                                    <ul className="category-list clearfix">
                                        <li><Link href="/service-details">First Home Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-2">Refinance & Refix <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-3">Construction Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-4">Investment Loans <i className="icon-42"></i></Link></li>
                                        <li><Link href="/service-details-5" className='current'>Asset Finance <i className="icon-42"></i></Link></li>
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
                                    <span className="sub-title mb_10">Asset Finance</span>
                                    <h2>Power your business forward with tailored asset finance solutions</h2>
                                    <p className="mt_20">At FM Northshore, we specialise in helping businesses like yours access the right financing to acquire essential assets. Whether you need vehicles, machinery, or technology, our expert team is here to guide you to the best finance solution.</p>
                                </div>
                                <figure className="image-box mb_30"><img src="assets/images/service/img2.jpg" alt=""/></figure>
                                <div className="text-box mb_110">
                                    <p className="mb_25">Our team has in-depth knowledge of various industries and their specific asset requirements, ensuring you get advice that’s tailored to your business sector.</p>
                                    <p>We have strong relationships with a wide range of lenders, including those specialising in asset finance, giving you access to more options and potentially better rates.</p>
                                </div> 
                                <div className="text-box mb_70">
                                    <h2>Our Asset Finance process</h2>
                                    {/* <p>Trouble that are bound to ensue; and equaly blame belongs those who fail in their duty through weakness of will which is the same as saying through shrinking from toil and pain.</p> */}
                                </div>
                                <div className="tabs-box mb_50">
                                    <ul className="tab-btns tab-buttons">
                                        <li onClick={() => handleOnClick(1)} className={activeIndex === 1 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>
                                        Business needs assessment</li>
                                        <li onClick={() => handleOnClick(2)} className={activeIndex === 2 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Customised finance options</li>
                                        <li onClick={() => handleOnClick(3)} className={activeIndex === 3 ? "tab-btn active-btn" : "tab-btn"}><i className="icon-43"></i>Streamlined application process</li>
                                    </ul>
                                    <div className="tabs-content">
                                        <div className={activeIndex === 1 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/img1.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>
                                                    Business needs assessment</h6>
                                                    <p>Our asset finance experts will discuss your business goals, assess your current financial situation, and review your asset requirements. We’ll help you understand how different finance options can support your business objectives.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 2 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/construct-loans.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Customised finance options</h6>
                                                    <p>Based on our assessment, we’ll research and compare a wide range of lenders and asset finance products. We’ll present you with the best options, clearly explaining the benefits and considerations of each, including tax implications and cash flow effects.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={activeIndex === 3 ? "tab active-tab" : "tab"}>
                                            <div className="inner-box">
                                                <figure className="image-box"><img src="assets/images/service/business-loans.jpg" alt=""/></figure>
                                                <div className="content-box">
                                                    <h6>Streamlined application process</h6>
                                                    <p>Once you’ve chosen your finance option, we’ll manage the entire application process for you. From paperwork to liaising with lenders, we’ll handle every detail, ensuring a smooth journey to securing your new business assets.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-box">
                                    <p className="mb_25">Upgrade your business assets without straining your capital. We’ll find flexible financing options for vehicles, equipment, and machinery, allowing you to stay competitive and efficient while preserving your cash flow</p>
                                    <p>We’ll help you structure your finance optimally, considering factors like tax efficiency, cash flow management, and future business growth.</p>
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