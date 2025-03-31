'use client'
import Link from "next/link"


export default function Chooseus(){
    return (
        <> 

        <section className="chooseus-section alternat-2 pt_120 pb_90">
            <div className="auto-container">
                <div className="sec-title pb_60 sec-title-animation animation-style2">
                    <span className="sub-title mb_10 title-animation">Why Us</span>
                    <h2 className="title-animation">Why Choose Us</h2>
                </div>
                <div className="inner-container">
                    <div className="row clearfix">
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-4"></i></div>
                                    <h3><Link href="/index-2">Tailored Advice</Link></h3>
                                    <p>We are a trusted mortgage adviser with unparalleled industry knowledge and a commitment to personalised service. </p>
                                    <div className="link"><Link href="/index-2">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-5"></i></div>
                                    <h3><Link href="/index-2">Banking Insider Knowledge</Link></h3>
                                    <p>Utilising our deep understanding of bank processes and preferences to secure the best deals for clients.</p>
                                    <div className="link"><Link href="/index-2">Learn More<i className="icon-7"></i></Link></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 chooseus-block">
                            <div className="chooseus-block-one">
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-6"></i></div>
                                    <h3><Link href="/index-2">Client Education</Link></h3>
                                    <p>Offer educational resources and workshops to empower clients to make informed decisions about their financial future.</p>
                                    <div className="link"><Link href="/index-2">Learn More<i className="icon-7"></i></Link></div>
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
