'use client'
import VideoPopup from "@/components/elements/VideoPopup"
import CircleText from "../../../components/elements/CircleText"


export default function About(){
    return (
        <> 

        <section className="about-style-two">
            <div className="auto-container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box mr_80">
                                <div className="sec-title pb_20 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">About us</span>
                                    <h2 className="title-animation">FM Northshore</h2>
                                </div>
                                <div className="text-box">
                                    <p>FM Northshore is New Zealand's leading Mortgage and Financial Adviser, dedicated to securing your financial future. With our comprehensive approach, we offer a one-stop shop for all your financial needs.</p>
                                    <ul className="list-style-one clearfix">
                                        <li>We put our clients’ needs first, providing personalised advice and solutions tailored to each individual’s unique financial situation and goals.</li>
                                        <li>We operate with honesty and transparency, ensuring our clients have all the information they need to make informed decisions about their finances.</li>
                                        <li>We stay at the forefront of industry trends and constantly seeking new ways to improve our services and deliver better outcomes for our clients.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                        <div className="video_block_two">
                            <div className="video-box t_120 z_1 p_relative ml_40 mr_60 centred">
                                <div className="video-inner" style={{ backgroundImage: "url(assets/images/service/refinance.jpg)" }}>
                                    {/* <div className="video-content">
                                        <div className="curve-text">
                                            <span className="curved-circle"><CircleText text="watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;" radius={67} /></span>
                                        </div>
                                        <VideoPopup />
                                    </div> */}
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
