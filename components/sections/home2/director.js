// 'use client'
// import VideoPopup from "@/components/elements/VideoPopup"
// import CircleText from "../../../components/elements/CircleText"


// export default function About(){
//     return (
//         <> 

//         <section className="about-style-two">
//             <div className="auto-container">
//                 <div className="row align-items-center">
//                 <div className="col-lg-6 col-md-12 col-sm-12 video-column">
//                         <div className="video_block_two">
//                             <div className="video-box t_120 z_1 p_relative ml_40 mr_60 centred">
//                                 <div className="video-inner" style={{ backgroundImage: "url(assets/images/resource/img8.png)" }}>
//                                     <div className="video-content">
//                                         <div className="curve-text">
//                                             <span className="curved-circle"><CircleText text="watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;" radius={67} /></span>
//                                         </div>
//                                         <VideoPopup />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="col-lg-6 col-md-12 col-sm-12 content-column">
//                         <div className="content_block_one">
//                             <div className="content-box mr_80">
//                                 <div className="sec-title pb_20 sec-title-animation animation-style2">
//                                     <span className="sub-title mb_10 title-animation">
//                                     Meet our Director</span>
//                                     <h2 className="title-animation">Manisha Krishna</h2>
//                                 </div>
//                                 <div className="text-box">
//                                     <p>Manisha Krishna leads FM Northshore with over 22 years of banking & lending expertise. Manisha’s approach ensures each client gets personalized solutions and timely advice.</p>
//                                     <ul className="list-style-one clearfix">
//                                         <li>Expert lending knowledge from 22 years in banking</li>
//                                         <li>Innovative problem-solver for unique client needs</li>
//                                         <li>Committed to making finance accessible for all Kiwis</li>
//                                     </ul>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
                    
//                 </div>
//             </div>
//         </section>

//         </>
//     )
// }


'use client'
import VideoPopup from "@/components/elements/VideoPopup"


export default function About(){
    return (
        <> 

        <section className="about-section pt_120 pb_120">
            <div className="auto-container">
                <div className="row align-items-center">
                    {/* <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                        <div className="video_block_one">
                            <div className="video-box p_relative pt_40 pb_40 pl_30 centred">
                                <div className="image-layer">
                                    <figure className="image-1"><img src="assets/images/resource/img8.png" alt=""/></figure>
                                    <figure className="image-2"><img src="assets/images/resource/img8.png" alt=""/></figure>
                                </div>
                                <div className="video-inner" style={{ backgroundImage: "url(assets/images/resource/img8.png)" }}>
                                    <div className="video-content">
                                        <VideoPopup />
                                        <h6>Watch Video</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                    <div className="col-lg-6 col-md-12 col-sm-12 video-column">
                         <div className="video_block_two">
                             <div className="video-box t_120 z_1 p_relative ml_10 mr_10 centred">
                                 <div className="video-inner" style={{ backgroundImage: "url(assets/images/resource/img8.png)" }}>
{/* //                                     <div className="video-content">
//                                         <div className="curve-text">
//                                             <span className="curved-circle"><CircleText text="watch&nbsp;the&nbsp;video&nbsp;right&nbsp;now&nbsp;" radius={67} /></span>
//                                         </div>
//                                         <VideoPopup />
//                                     </div> */}
                                </div>
                             </div>
                         </div>
                     </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box ml_80">
                                <div className="sec-title pb_20 sec-title-animation animation-style2">
                                    <span className="sub-title mb_10 title-animation">Meet our Director</span>
                                    <h2 className="title-animation">Manisha Krishna </h2>
                                </div>
                                <div className="text-box">
                                    <p>Manisha Krishna leads FM Northshore with over 22 years of banking & lending expertise. Manisha’s approach ensures each client gets personalized solutions and timely advice.</p>
                                    <ul className="list-style-one clearfix">
                                        <li>Expert lending knowledge from 22 years in banking</li>
                                        <li>Innovative problem-solver for unique client needs</li>
                                        <li>Committed to making finance accessible for all Kiwis</li>
                                    </ul>
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
