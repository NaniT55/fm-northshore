'use client'
import React from 'react'
import Link from "next/link"

export default function About(){
    return (
        <> 
            <section className="about-style-four pt_120 pb_120">
                <div className="auto-container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                            <div className="image_block_two">
                                <div className="image-inner">
                                    <div className="image-box mr_15">
                                        <figure className="image image-1 mb_15"><img src="assets/images/resource/img4.jpg" alt=""/></figure>
                                        <figure className="image image-2"><img src="assets/images/resource/img5.jpg" alt=""/></figure>
                                    </div>
                                    <div className="image-box">
                                        <figure className="image image-3 mb_15"><img src="assets/images/resource/img6.jpg" alt=""/></figure>
                                        <figure className="image image-4"><img src="assets/images/resource/img7.jpg" alt=""/></figure>
                                    </div>
                                    <div className="support-box">
                                        <div className="icon-box"><i className="icon-28"></i></div>
                                        <span>Online Support</span>
                                        <h4><Link href="tel:0275792581">027 579 2581</Link></h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                            <div className="content_block_five">
                                <div className="content-box">
                                    <div className="sec-title pb_40 sec-title-animation animation-style2">
                                        <span className="sub-title mb_10 title-animation">About us</span>
                                        <h2 className="title-animation">Your Trusted <span>Mortgage</span> Advisers</h2>
                                        <p className="title-animation">FM Northshore is New Zealand's leading Mortgage and Financial Adviser, dedicated to securing your financial future. With our comprehensive approach, we offer a one-stop shop for all your financial needs.</p>
                                    </div>
                                    <div className="inner-box clearfix">
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-29"></i></div>
                                            <h4><Link href="/job-details">Client Centric</Link></h4>
                                            <span>Fall 2023</span>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-30"></i></div>
                                            <h4><Link href="/job-details">Integrity</Link></h4>
                                            <span>Winter 2023</span>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-31"></i></div>
                                            <h4><Link href="/job-details">Innovation                                            </Link></h4>
                                            <span>Winter 2023</span>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><i className="icon-32"></i></div>
                                            <h4><Link href="/job-details">Best support</Link></h4>
                                            <span>Winter 2023</span>
                                        </div>
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
