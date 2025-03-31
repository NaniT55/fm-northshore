'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
// import Dueal from '@/components/sections/home2/Dueal'

export default function Terms_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Privacy Policy">
    <div className="terms-container">
      <p>
        <strong>Date Last Modified:</strong> October 18, 2024
      </p>

      <section>
        <h2>Introduction</h2>
        <p>
          FM Northshore Limited (we, us, our) complies with the New Zealand Privacy Act 2020 (the Act) when dealing with
          personal information. Personal information is information about an identifiable individual (a natural person).
          This policy sets out how we will collect, use, disclose, and protect your personal information.
        </p>
        <p>
          This policy does not limit or exclude any of your rights under the Act. If you wish to seek further information
          on the Act, you can contact our Privacy Officer by email at{" "}
          <a href="mailto:manisha@fmnorthshore.co.nz">manisha@fmnorthshore.co.nz</a>. Or visit{" "}
          <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer">
            www.privacy.org.nz
          </a>{" "}
          for further information.
        </p>
      </section>

      <section>
        <h2>Changes to this Policy</h2>
        <p>
          We may change this policy by uploading a revised policy onto the website. The change will apply from the date
          that we upload the revised policy.
        </p>
      </section>

      <section>
        <h2>What is Personal Information?</h2>
        <p>
          Personal information is information about an identifiable individual. It includes (but is not limited to) name,
          address, contact details, date of birth, occupations, payment details, employment history, education and
          qualifications, financial information, testimonials, and other information.
        </p>
      </section>

      <section>
        <h2>Use of Personal Information</h2>
        <p>
          We will use your personal information to verify your identity, provide services, market our services, improve our
          services, respond to communications, and enforce legal rights.
        </p>
      </section>

      <section>
        <h2>Disclosing Your Personal Information</h2>
        <p>
          We may disclose your personal information to various third parties such as service providers, financial advisers,
          regulatory authorities, and legal bodies.
        </p>
      </section>

      <section>
        <h2>Protecting Your Personal Information</h2>
        <p>
          We will take reasonable steps to keep your personal information safe from loss, unauthorized activity, or other
          misuse. Our software is subject to audits to ensure it meets security requirements. All data is encrypted in
          transit and during storage.
        </p>
      </section>

      <section>
        <h2>Storing Your Personal Information</h2>
        <p>
          We will retain personal information only as long as it is required for lawful purposes. All data stored online is
          backed up and can be retrieved in the event of data loss.
        </p>
        <p>Data may also be stored on-premise at 195A Wairau Road, Wairau Valley, Auckland 0627 if provided outside our software.</p>
      </section>

      <section>
        <h2>Accessing and Correcting Your Personal Information</h2>
        <p>
          You have the right to access and correct your personal information. Before exercising this right, we may require
          proof of identity.
        </p>
        <p>
          If you wish to access or correct your information, please email us at{" "}
          <a href="mailto:manisha@fmnorthshore.co.nz">manisha@fmnorthshore.co.nz</a>.
        </p>
      </section>

      <section>
        <h2>Data Breaches</h2>
        <p>
          Our Privacy Officer has processes in place for data breaches. In such an event, we will promptly identify, report,
          and examine the breach.
        </p>
      </section>

      <section>
        <h2>Internet Use</h2>
        <p>
          While we take steps to maintain secure internet connections, providing personal information online is at your own
          risk.
        </p>
        <p>
          If you follow a link to another website, that site will have its own privacy policy. We recommend reviewing it
          before providing personal information.
        </p>
        <p>
          We use cookies to monitor website usage. You may disable cookies in your browser settings, but this may limit some
          website functionality.
        </p>
        <p>
          We use monitoring services to prevent unauthorized access or attacks. Third-party suppliers may have access to
          monitoring and logging information.
        </p>
      </section>
    </div>
                <Subscribe/>

            </Layout>
        </div>
    )
}
