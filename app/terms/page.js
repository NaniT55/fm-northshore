'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
// import Dueal from '@/components/sections/home2/Dueal'

export default function Terms_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Terms & Conditions">
                
            <div className="terms-container">
            
            
            {/* <h1>Disclaimer</h1> */}
            <p><strong>Date Last Modified:</strong> October 18, 2024</p>

            <section>
                <h2>General Information</h2>
                <p>
                This website is a general information service provided by FM Northshore. The information provided and services described are of a general nature and are not intended to be personalised financial advice to a retail client. The information provided in this website is not intended to be a substitute for professional advice. You may seek appropriate personalised financial advice from a qualified professional to suit your individual circumstances. You should not do, or refrain from doing, anything based on the information provided in this site without first obtaining professional advice from a financial adviser. We can help you decide whether your decision is appropriate for you.
                </p>
            </section>

            <section>
                <h2>Jurisdiction</h2>
                <p>
                The information published on this website is governed by, and has been prepared to comply with, the New Zealand law. The information is only intended for persons within the New Zealand jurisdiction and is not intended for persons outside the New Zealand jurisdiction. FM Northshore does not accept responsibility for the compliance of this information with the laws of any other country. The laws of New Zealand shall govern your use of the website and by visiting this website you hereby agree to submit to the exclusive jurisdiction of the New Zealand courts.
                </p>
            </section>

            <section>
                <h2>No Offer or Recommendation</h2>
                <p>
                Nothing in this site is, or should be taken as, an offer, invitation or recommendation to buy or sell any investment, insurance, or home loan product represented herein without first obtaining professional advice regarding its appropriateness to your personal circumstances.
                </p>
            </section>

            <section>
                <h2>Copyright</h2>
                <p>
                Copyright in this site is owned by FM Northshore, unless otherwise indicated. You are entitled to use the information in this site for your personal reference only. You must not reproduce or distribute content from this site or any part of it, nor transmit it to any other person or incorporate it in any way in any other document or materials.
                </p>
            </section>

            <section>
                <h2>Disclosure Statements</h2>
                <p>
                    A disclosure statement relating to the advisers associated with this website is available on request and free of charge.
                </p>
            </section>

            <section>
                <h2>Disclaimer</h2>
                <p>
                This website is provided by FM Northshore. By using and viewing this website you will be deemed to agree to the following disclaimer and privacy statement:
                </p>
            </section>

            <section>
                <h2>Your Privacy</h2>
                <p>
                Any personal information you provide to FM Northshore will be used to provide information that you request and retained to provide you with further information about our services. Please note that none of the information we collect is passed on to any third party without your approval. If you are an individual, you have rights of access to and correction of personal information that is held about you. If you would like to access, correct and/or change the information collected at any time, please contact us.
                </p>
            </section>

            <section>
                <h2>No Warranties</h2>
                <p>
                While every effort is made to ensure the information on this website is up-to-date and correct, FM Northshore makes no representations or warranties of any kind, express or implied, about the accuracy, reliability, completeness, suitability or availability of the website or the information about the products and services provided on the website. The information on this website is subject to change at any time without notice to you.
                </p>
                <p> Any reference on this website to historical information and performance of a product or service may not necessarily be a good guide to future performance. You are solely responsible for any actions you take or do not take by relying on such information.
                </p>
            </section>

            <section>
                <h2>Liability</h2>
                <p>
                To the full extent legally allowable, the directors, contractors, associates and staff of FM Northshore expressly disclaim all and any liability (including by reason of negligence) and responsibility to any person in respect of anything, and of the consequences of anything, done or omitted to be done by any such person in reliance, whether wholly or partially, upon the whole or any part of the contents of this website. The disclaimers and limitations of liability do not prejudice your rights under the Consumer Guarantees Act 1993, nor are they intended to exclude liability arising under statute.
                </p>
            </section>

            <section>
                <h2>Linked Websites</h2>
                <p>
                Through this website you may be able to link to other websites which are not under the control of FM Northshore and it has no knowledge of or control over the nature, content, and availability of those websites. FM Northshore does not sponsor, recommend, or endorse anything contained on these linked websites. FM Northshore does not accept any liability of any description for any loss suffered by you by relying on anything contained or not contained on these linked websites.
                </p>
            </section>
        </div>
                <Subscribe/>

            </Layout>
        </div>
    )
}
