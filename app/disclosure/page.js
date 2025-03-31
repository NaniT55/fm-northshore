'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
// import Dueal from '@/components/sections/home2/Dueal'

export default function Terms_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Disclosure">
            <div className="terms-container">
      {/* <h1>Financial Disclosure Statement</h1> */}
      <p><strong>Date Last Modified:</strong> 08 Nov 2024</p>
      
      <section>
        <h2>About FM Northshore Limited</h2>
        <p>
          FM Northshore Limited holds a Financial Advice Provider licence issued by the FMA to provide financial advice services.
          Our Financial Services Provider Number is FSP1008121.
        </p>
        <h3>Our office contact details:</h3>
        <ul>
          <li><strong>Address:</strong> 195A Wairau Road, Wairau Valley, Auckland 0627</li>
          <li><strong>Phone:</strong> +64 275792581</li>
          <li><strong>Email:</strong> <a href="mailto:manisha@fmnorthshore.co.nz">manisha@fmnorthshore.co.nz</a></li>
          <li><strong>Website:</strong> <a href="https://www.fmnorthshore.co.nz">www.fmnorthshore.co.nz</a></li>
        </ul>
      </section>
      
      <section>
        <h2>Nature and Scope of Financial Advice Services</h2>
        <h3>Products We Advise On</h3>
        <ul>
          <li>Residential & Commercial Mortgages</li>
          <li>Business Lending</li>
          <li>Loans (including reverse mortgages)</li>
          <li>Refinance & Refixes</li>
          <li>Asset Finance</li>
          <li>Construction Loans</li>
        </ul>
        <h3>Product Providers</h3>
        <p>We may recommend products from the following banks and non-bank lenders:</p>
        <ul>
          <li><strong>Banks:</strong> ANZ, ASB, BNZ, Westpac, Kiwibank, SBS, New Co-operative Bank, Heartland Bank</li>
          <li><strong>Non-Banks:</strong> Liberty Financial, Pepper Money, Avanti Finance, Cressida Capital, Prospa, Unity Credit Union</li>
        </ul>
      </section>
      
      <section>
        <h2>Fees and Charges</h2>
        <p>Our fees depend on the scope and nature of advice provided. We will discuss and agree on fees before proceeding.</p>
        <h3>Types of Fees:</h3>
        <ul>
          <li>Fixed fees or percentage-based fees.</li>
          <li>Initial advice and ongoing services.</li>
          <li>Annual service fees (if applicable).</li>
        </ul>
        <p>Additional costs may apply, but we will always disclose these before incurring them.</p>
      </section>
      
      <section>
        <h2>Commissions & Other Incentives</h2>
        <p>We are compensated by product providers if you stay with them for a minimum period (typically 28 months). We may also receive ongoing commissions.</p>
        <p>If you choose not to proceed with our advice, we may charge an hourly rate after the first two free hours.</p>
      </section>
      
      <section>
        <h2>Managing Conflicts of Interest</h2>
        <ul>
          <li>We prioritize client interests over business relationships.</li>
          <li>Advisors receive annual training on conflict management.</li>
          <li>We maintain a register of conflicts and incentives.</li>
          <li>We conduct an independent Compliance Assurance Review annually.</li>
        </ul>
      </section>
      
      <section>
        <h2>Our Duties & Obligations</h2>
        <p>We comply with the Financial Markets Conduct Act (431I, 431K, 431L, 431M), ensuring:</p>
        <ul>
          <li>Competence, knowledge, and skill standards are met.</li>
          <li>Clients' interests are prioritized.</li>
          <li>High levels of care, diligence, and ethical conduct.</li>
        </ul>
      </section>
      
      <section>
        <h2>Complaints Process</h2>
        <h3>Internal Complaints</h3>
        <p>If you have a complaint, please contact our complaints manager:</p>
        <ul>
          <li><strong>Name:</strong> Manisha Krishna</li>
          <li><strong>Email:</strong> <a href="mailto:manisha@fmnorthshore.co.nz">manisha@fmnorthshore.co.nz</a></li>
          <li><strong>Phone:</strong> +64 275792581</li>
        </ul>
        <p>We aim to resolve complaints within 10 working days.</p>
        
        <h3>External Complaints</h3>
        <p>If unresolved, you may contact the Financial Services Complaints Limited (FSCL):</p>
        <ul>
          <li><strong>Address:</strong> PO Box 5967, Wellington 6140</li>
          <li><strong>Phone:</strong> 0800 347 257</li>
          <li><strong>Email:</strong> <a href="mailto:complaints@fscl.org.nz">complaints@fscl.org.nz</a></li>
        </ul>
      </section>
    </div>
                <Subscribe/>

            </Layout>
        </div>
    )
}
