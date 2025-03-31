'use client'
import React from 'react'
import Link from "next/link"

export default function Clients(){
    return (
        <> 
            <section className="clients-section pt_110 centred">
                <div className="auto-container">
                    <div className="title-text pb_60 sec-title-animation animation-style2">
                        <h2 className="title-animation">Choice of Lenders</h2>
                        <h3 className="title-animation">More than 20 partners to choose from</h3>
                    </div>
                    <div className="inner-box">
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/bnz.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/bnz.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/asb.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/asb.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/anz.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/anz.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/cressida.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/cressida.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/westpac.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/westpac.png" alt=""/></Link></figure>
                        </div>
                        <div className="clients-box">
                            <figure className="clients-logo"><Link href="/"><img src="assets/images/clients/kiwi.png" alt=""/></Link></figure>
                            <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/kiwi.png" alt=""/></Link></figure>
                        </div>

                    </div>
                </div>
            </section>
        </>
  )
}
