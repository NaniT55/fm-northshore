'use client'
import React, {useState} from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import Dueal from '@/components/sections/home2/Dueal'

export default function Contact_Page() {
    const [formData, setFormData] = useState({
        username: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            const data = await response.json();

            if (data.success) {
                setStatus('Message sent successfully!');
                setFormData({ username: '', phone: '', email: '', subject: '', message: '' });
            } else {
                setStatus('Error sending message. Please try again.');
            }
        } catch (error) {
            setStatus('Server error. Please try again later.');
        }
    };

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Contact us">
                
                <section className="contact-section pt_110 pb_30">
                    <div className="auto-container">
                        <div className="inner-container">
                            <div className="row clearfix">
                                <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                                    <div className="info-box">
                                        <h3>Contact Information</h3>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt=""/></div>
                                            <h4>Corporate Office</h4>
                                            <p>0233 Brisbane Cir. Shiloh, Australia 81063</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-27.png" alt=""/></div>
                                            <h4>Main Warehouse</h4>
                                            <p>10445 Brisbane Cir. Shiloh, Australia 81063</p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-28.png" alt=""/></div>
                                            <h4>Email Address</h4>
                                            <p><Link href="mailto:support@example.com">manisha@fmnorthshore.co.nz</Link><br /></p>
                                        </div>
                                        <div className="single-item">
                                            <div className="icon-box"><img src="assets/images/icons/icon-29.png" alt=""/></div>
                                            <h4>Phone Number</h4>
                                            <p><Link href="tel:0275792581">027 579 2581</Link><br /></p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                                    <div className="form-inner">
                                        <form method="post" action="sendemail.php" id="contact-form" onSubmit={handleSubmit}>
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Name <span>*</span></label>
                                                    <input type="text" name="username" placeholder="" value={formData.username} onChange={handleChange} required/>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                                    <label>Phone <span>*</span></label>
                                                    <input type="text" name="phone" placeholder="" value={formData.phone} onChange={handleChange} required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Email Address <span>*</span></label>
                                                    <input type="email" name="email" placeholder="" value={formData.email} onChange={handleChange} required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Subject <span>*</span></label>
                                                    <input type="text" name="subject" placeholder="" value={formData.subject} onChange={handleChange} required/>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                                    <label>Write Message <span>*</span></label>
                                                    <textarea name="message" placeholder="" value={formData.message} onChange={handleChange}></textarea>
                                                </div>
                                                <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                                    <button type="submit" className="theme-btn btn-one" name="submit-form">Send Message</button>
                                                </div>
                                            </div>
                                            {status && <p>{status}</p>}
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="google-map pb_80">
                    <div className="auto-container">
                        <div className="inner-container">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2643.6895046810805!2d-122.52642526124438!3d38.00014098339506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085976736097a2f%3A0xbe014d20e6e22654!2sSan Rafael%2C California%2C Hoa Kỳ!5e0!3m2!1svi!2s!4v1678975266976!5m2!1svi!2s" height={570} style={{ border: 0, width: "100%" }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                        </div>
                    </div>
                </section>
                <Dueal />
                <Subscribe/>

            </Layout>
        </div>
    )
}