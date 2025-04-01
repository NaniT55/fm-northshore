'use client'
import React, { useState } from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
import axios from 'axios'

export default function Signup_Page() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    // Handle form submit
    const handleSignup = async (e) => {
        e.preventDefault()
        setLoading(true)
        setError('')

        try {
            // Send signup request to backend
            const response = await axios.post('/api/signup', { name, email, phone, password })
            if (response.status === 201) {
                // On successful signup, you can redirect the user or show a success message
                console.log('Signup successful', response.data)
                // Redirect or handle success (e.g., navigate to login)
            }
        } catch (err) {
            // Handle error (e.g., user already exists, server error)
            setError('Signup failed. Please try again.')
            console.error('Signup error:', err)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Sign Up">
                <section className="sign-section pt_110 pb_120">
                    <div className="pattern-layer" style={{ backgroundImage: "url(assets/images/shape/shape-25.png)" }}></div>
                    <div className="auto-container">
                        <div className="form-inner">
                            <form onSubmit={handleSignup}>
                                <div className="form-group">
                                    <label>Name</label>
                                    <input 
                                        type="text" 
                                        name="name" 
                                        required 
                                        value={name} 
                                        onChange={(e) => setName(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        required 
                                        value={email} 
                                        onChange={(e) => setEmail(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input 
                                        type="text" 
                                        name="phone" 
                                        required 
                                        value={phone} 
                                        onChange={(e) => setPhone(e.target.value)} 
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
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
                                        {loading ? 'Signing Up...' : 'Sign Up'}
                                    </button>
                                </div>
                                <span className="text">or</span>
                                <ul className="social-links clearfix">
                                    <li>
                                        <Link href="/signup"><img src="assets/images/icons/icon-25.png" alt=""/>Continue with Google</Link>
                                    </li>
                                    <li>
                                        <Link href="/signup"><img src="assets/images/icons/icon-26.png" alt=""/>Continue with Facebook</Link>
                                    </li>
                                </ul>
                            </form>
                            <div className="lower-text centred"><p>Already have an account? <Link href="/login">Login Here</Link></p></div>
                        </div>
                    </div>
                </section>
                
                <Subscribe />
            </Layout>
        </div>
    )
}
