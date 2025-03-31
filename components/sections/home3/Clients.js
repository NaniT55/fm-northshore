import React from 'react'
import Link from "next/link"

export default function Clients(){
    return (
    <> 
       <section className="clients-section home-3">
            <div className="bg-color"></div>
            <div className="auto-container">
                <div className="inner-container">
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/bnz.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/bnz.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/asb.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/asb.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/anz.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/anz.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/cressida.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/cressida.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/kiwi.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/kiwi.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/westpac.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/westpac.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/sbs.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/sbs.png" alt=""/></Link></figure>
                    </div>
                    <div className="clients-box">
                        <figure className="clients-logo"><Link href="/index-3"><img src="assets/images/clients/heartland.png" alt=""/></Link></figure>
                        <figure className="overlay-logo"><Link href="/index-3"><img src="assets/images/clients/heartland.png" alt=""/></Link></figure>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}
