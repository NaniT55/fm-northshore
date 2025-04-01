'use client'

import React, { useState } from 'react'
import axios from 'axios'

export default function Subscribe() {
    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [message, setMessage] = useState('')

    // Handle email subscription
    const handleSubscribe = async (e) => {
        e.preventDefault()
        setLoading(true)
        setMessage('')

        try {
            // Sending email to backend via POST request
            const response = await axios.post('/api/subscribe', { email })

            // Handle successful response
            if (response.status === 200) {
                setMessage('Subscription successful! Check your inbox for updates.')
            }
        } catch (error) {
            // Handle error
            setMessage('Failed to subscribe. Please try again.')
            console.error('Error subscribing:', error)
        } finally {
            setLoading(false)
        }
    }

    return (
        <> 
        <section className="subscribe-style-two">
            <div className="bg-color"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="shape-box">
                        <div className="shape-1" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                        <div className="shape-2" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div>
                    </div>
                    <div className="text-box">
                        <h2>Subscribe for <span>latest update</span></h2>
                    </div>
                    <div className="form-inner">
                        <form onSubmit={handleSubscribe}>
                            <div className="form-group">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                                <button type="submit" className="theme-btn btn-one" disabled={loading}>
                                    {loading ? 'Subscribing...' : 'Subscribe'}
                                </button>
                            </div>
                        </form>
                    </div>
                    {message && <div className="response-message">{message}</div>}
                </div>
            </div>
        </section>
        </>
    )
}
