'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import About from "@/components/sections/home4/About"
import Clients from "@/components/sections/home3/Clients"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"
import Subscribe from '@/components/sections/home2/Subscribe'

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    loop: true,

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        1199: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
        1350: {
            slidesPerView: 2,
            spaceBetween: 30,
        },
    }
}

export default function About_Page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="About Us">
                <About/>
                <Clients/>

                <section className="chooseus-section alternat-3 pt_120 pb_90">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-23.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title light centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Why Us</span>
                            <h2 className="title-animation">Why Choose Us</h2>
                        </div>
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-4"></i></div>
                                            <h3><Link href="/">Client Centric</Link></h3>
                                            <p>We put our clients’ needs first, providing personalised advice and solutions tailored to each individual’s unique financial situation and goals.</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-5"></i></div>
                                            <h3><Link href="/">Integrity</Link></h3>
                                            <p>We operate with honesty and transparency, ensuring our clients have all the information they need to make informed decisions about their finances.</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                                    <div className="chooseus-block-one">
                                        <div className="inner-box">
                                            <div className="icon-box"><i className="icon-6"></i></div>
                                            <h3><Link href="/">Innovation</Link></h3>
                                            <p>We stay at the forefront of industry trends and constantly seeking new ways to improve our services and deliver better outcomes for our clients.</p>
                                            <div className="link"><Link href="/">Learn More<i className="icon-7"></i></Link></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <section className="industries-style-four pt_120 pb_90">
                    <div className="auto-container">
                        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Industries</span>
                            <h2 className="title-animation">Industries Served</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-9"></i></div>
                                        <h3><Link href="/">Hotel</Link></h3>
                                        <p>2853 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-10"></i></div>
                                        <h3><Link href="/">Hospitality</Link></h3>
                                        <p>2256 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-11"></i></div>
                                        <h3><Link href="/">Kitchen</Link></h3>
                                        <p>1408 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-12"></i></div>
                                        <h3><Link href="/">Retail</Link></h3>
                                        <p>1740 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-13"></i></div>
                                        <h3><Link href="/">Events</Link></h3>
                                        <p>3948 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-14"></i></div>
                                        <h3><Link href="/">Labor</Link></h3>
                                        <p>2984 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-15"></i></div>
                                        <h3><Link href="/">Driving</Link></h3>
                                        <p>4509 Staffs</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 industries-block">
                                <div className="industries-block-two">
                                    <div className="inner-box">
                                        <div className="icon-box"><i className="icon-16"></i></div>
                                        <h3><Link href="/">Caretaker</Link></h3>
                                        <p>1039 Staffs</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                {/* <section className="team-section z_1 centred pt_0 pb_0">
                    <div className="auto-container">
                        <div className="sec-title pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Our Team</span>
                            <h2 className="title-animation">Meet The Team</h2>
                        </div>
                        <div className="row clearfix">
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-1.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Tom Oliver</Link></h3>
                                            <span className="designation">Founder</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-2.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Loenard Barnes</Link></h3>
                                            <span className="designation">Lead Engineer</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-3.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Gilbert Sherman</Link></h3>
                                            <span className="designation">Sale Manager</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                                <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                                    <div className="inner-box">
                                        <div className="image-box">
                                            <figure className="image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                            <figure className="overlay-image"><img src="assets/images/team/team-4.jpg" alt=""/></figure>
                                        </div>
                                        <div className="lower-content">
                                            <h3><Link href="/">Franklin Bailey</Link></h3>
                                            <span className="designation">Art Director</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}

                <section className="testimonial-style-two pt_120 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-17.png)" }}></div>
                    <div className="auto-container">
                        <div className="sec-title centred pb_60 sec-title-animation animation-style2">
                            <span className="sub-title mb_10 title-animation">Testimonials</span>
                            <h2 className="title-animation">Love From Users</h2>
                        </div>
                        <div className='slider-content p_relative'>
                            <Swiper {...swiperOptions} className="two-item-carousel">
                                <SwiperSlide>
                                    <div className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                            <div className="author-box">
                                                <figure className="thumb-box"><img src="assets/images/resource/img17.jpg" alt=""/></figure>
                                                <h4>James & Sarah T.</h4>
                                                <span className="designation">Auckland</span>
                                            </div>
                                            <p>"FM Northshore made the mortgage process seamless and stress-free. Their expert advice helped us secure the best loan for our dream home. Highly recommend!"</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                            <div className="author-box">
                                                <figure className="thumb-box"><img src="assets/images/resource/img18.jpg" alt=""/></figure>
                                                <h4>Emma R.</h4>
                                                <span className="designation">Wellington</span>
                                            </div>
                                            <p>"The team at FM Northshore guided us through every step of refinancing our home loan. They provided clear, honest advice and found us a much better rate!"</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                            <div className="author-box">
                                                <figure className="thumb-box"><img src="assets/images/resource/img19.jpg" alt=""/></figure>
                                                <h4>Mark & Lisa P.</h4>
                                                <span className="designation">Christchurch</span>
                                            </div>
                                            <p>"Thanks to FM Northshore, we were able to structure our mortgage in a way that saved us thousands in interest. Their personalized approach and attention to detail were outstanding."</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <div className="testimonial-block-two">
                                        <div className="inner-box">
                                            <div className="icon-box"><img src="assets/images/icons/icon-11.png" alt=""/></div>
                                            <div className="author-box">
                                                <figure className="thumb-box"><img src="assets/images/resource/img20.jpg" alt=""/></figure>
                                                <h4>David W.</h4>
                                                <span className="designation">Hamilton</span>
                                            </div>
                                            <p>"We had so many questions about our first home loan, but FM Northshore explained everything in a way that made sense. Their support was invaluable!"</p>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            </Swiper>
                            <div className="owl-dots">
                                <div className="swiper-pagination"></div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* <Subscribe/> */}

            </Layout>
        </div>
    )
}