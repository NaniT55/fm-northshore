'use client'
import Link from "next/link"


export default function Clients(){
    return (
        <> 

        <section className="clients-section">
            <div className="auto-container">
                <div className="inner-container">
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
                        <figure className="overlay-logo"><Link href="/"><img src="assets/images/clients/westpac-5.png" alt=""/></Link></figure>
                    </div>
                </div>
            </div>
        </section>

        </>
    )
}
