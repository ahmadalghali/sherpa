import React from 'react'
import NotLoggedInLayout from '../components/NotLoggedInLayout'

type Props = {}

function PrivacyPolicy({ }: Props) {
  return (
    <article className='py-28 prose prose-li:marker:text-black'>

      <h1>
        Sherpa&apos;s Privacy Policy
      </h1>


      <p>Sherpa is a mobile application available for Android and iOS devices. Through this app, users are able to create personal goals and objectives.</p>

      <p> Minimal amount of personal details is required to benefit from the services this App makes available.This Privacy Policy outlines what data we may collect, and how it&apos;s processed. </p>

      <p>For any further information in respect to how we value your privacy feel free to contact us by email at <b>sherpaadmin@gmail.com</b>.</p>


      <h2>Data use</h2>

      <ul>
        <li>Allowing you to generate content</li>
        <li>Allowing you to engage with other users</li>
        <li>Allowing you to store data for your future reuse.</li>
      </ul>

      <h2>We do not sell your data</h2>

      <p>
        We will never sell or attempt to sell the data you provide us. We guarantee that the data you trust us with will never be sold or shared as a commodity. We shall only use your data as a means to benefit you in respect to your use of this App.
      </p>


      <h2>Your rights</h2>

      <p>As a user of our service, you maintain the right to: </p>

      <ul >
        <li>Amend or delete data you have provided us</li>
        <li>Request us to amend or delete your data</li>
        <li>Request us to provide any data we have associated with your account</li>
      </ul>

      <h2>Contact us</h2>

      <p>
        For further details, please reach the team via email: <b>sherpaadmin@gmail.com</b>
      </p>

    </article >
  )
}

PrivacyPolicy.getLayout = function getLayout(page: any) {
  return (
    <NotLoggedInLayout>
      {page}
    </NotLoggedInLayout>
  )
}

export default PrivacyPolicy