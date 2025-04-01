'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import axios from 'axios'

export default function Login_Page() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Handle form submit
    const handleLogin = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            const response = await axios.post('/api/login', { email, password })
            if (response.status === 200) {
                console.log('Login successful', response.data)
                
            }
        } catch (err) {
            
            setError('Invalid email or password.')
            console.error('Login error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Login">
                <section className="sign-section pt_110 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                    <div className="auto-container">
                        <div className="form-inner">
                            <form onSubmit={handleLogin}>
                                <div className="form-group">
                                    <label>Email <span>*</span></label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password <span>*</span></label>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        required
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                                {error && <div className="error-message">{error}</div>}
                                <div className="form-group message-btn">
                                    <button type="submit" className="theme-btn btn-one" disabled={loading}>
                                        {loading ? 'Logging In...' : 'Log In'}
                                    </button>
                                </div>
                                <span className="text">or</span>
                                <ul className="social-links clearfix">
                                    <li>
                                        <Link href="/login"><img src="assets/images/icons/icon-25.png" alt=""/>Continue with Google</Link>
                                    </li>
                                    <li>
                                        <Link href="/login"><img src="assets/images/icons/icon-26.png" alt=""/>Continue with Facebook</Link>
                                    </li>
                                </ul>
                            </form>
                            <div className="other-option">
                                <div className="check-box">
                                    <input className="check" type="checkbox" id="checkbox1"/>
                                    <label htmlFor="checkbox1">Remember me</label>
                                </div>
                                <button className="forgot-password">Forget password?</button>
                            </div>
                            <div className="lower-text centred"><p>Not registered yet? <Link href="/signup">Create an Account</Link></p></div>
                        </div>
                    </div>
                </section>
                
                <Subscribe />
            </Layout>
        </div>
    )
}
