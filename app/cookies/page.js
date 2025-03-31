'use client'
import React from 'react'
import Link from "next/link"
import Layout from "@/components/layout/Layout"
import Subscribe from '@/components/sections/home2/Subscribe'
// import Dueal from '@/components/sections/home2/Dueal'

export default function Terms_page() {

    return (
        <div className="boxed_wrapper">
            <Layout headerStyle={3} footerStyle={2} breadcrumbTitle="Cookies">
            <div className="terms-container">
            <p>
                <strong>Date Last Modified:</strong> October 18, 2024
            </p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Cookie Policy explains how FM Northshore (“we”, “us”, or “our”) uses cookies and similar technologies on
          our website. By using our website, you consent to the use of cookies as described in this policy.
        </p>
      </section>

      <section>
        <h2>2. What are Cookies?</h2>
        <p>
          Cookies are small text files that are placed on your device when you visit a website. They are widely used to
          make websites work more efficiently and provide information to the website owners.
        </p>
      </section>

      <section>
        <h2>3. Types of Cookies We Use</h2>
        <p>We use the following types of cookies:</p>
        <ul>
          <li>
            <strong>Essential Cookies:</strong> These are necessary for the website to function properly. They enable
            basic functions like page navigation and access to secure areas of the website.
          </li>
          <li>
            <strong>Advertising Cookies:</strong> These cookies make advertising messages more relevant to you. They
            prevent repeated ads, ensure proper ad display, and select advertisements based on your interests.
          </li>
        </ul>
      </section>

      <section>
        <h2>4. Third-Party Cookies</h2>
        <p>We also use third-party cookies from:</p>
        <ul>
          <li>
            <strong>Google Analytics:</strong> To analyze how our website is used.
          </li>
          <li>
            <strong>Facebook Pixel:</strong> For advertising and measuring the effectiveness of our ads on Facebook.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Other Tracking Technologies</h2>
        <p>In addition to cookies, we use:</p>
        <ul>
          <li>
            <strong>Pixel tags:</strong> Small graphic images that help us understand how users interact with our
            website and emails.
          </li>
          <li>
            <strong>Google Tag Manager:</strong> To manage and deploy marketing tags on our website.
          </li>
        </ul>
      </section>

      <section>
        <h2>6. How Long Do Cookies Stay on My Device?</h2>
        <p>
          The length of time a cookie remains on your device varies. Some expire at the end of your browser session,
          while others remain until manually deleted.
        </p>
      </section>

      <section>
        <h2>7. Your Choices Regarding Cookies</h2>
        <p>
          Most web browsers allow you to control cookies through settings. However, restricting cookies may impact your
          user experience by preventing personalization and saving preferences like login details.
        </p>
      </section>

      <section>
        <h2>8. Cookie Use by Location</h2>
        <p>
          While our website is accessible globally, it is primarily intended for users in New Zealand. The same cookies
          and tracking technologies apply regardless of your location.
        </p>
      </section>

      <section>
        <h2>9. Personal Information and Cookies</h2>
        <p>
          We collect basic information through cookies and similar technologies for advertising purposes, such as data
          used by Facebook and Google for targeted advertising.
        </p>
      </section>

      <section>
        <h2>10. Website Features Using Cookies</h2>
        <p>Some features of our website, including admin access, rely on cookies to function properly.</p>
      </section>

      <section>
        <h2>11. Sharing of Cookie Information</h2>
        <p>We do not share information collected through cookies with third parties.</p>
      </section>

      <section>
        <h2>12. Updates to This Policy</h2>
        <p>
          We may update this Cookie Policy from time to time. We encourage you to periodically review this page for the
          latest information on our cookie practices.
        </p>
      </section>

      <section>
        <h2>13. Contact Us</h2>
        <p>
          If you have any questions about our use of cookies or this Cookie Policy, please contact us at{" "}
          <a href="mailto:manisha@fmnorthshore.co.nz">manisha@fmnorthshore.co.nz</a>.
        </p>
      </section>
    </div>
                <Subscribe/>

            </Layout>
        </div>
    )
}
