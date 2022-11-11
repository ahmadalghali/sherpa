import React from 'react'
import NotLoggedInLayout from '../components/NotLoggedInLayout'

type Props = {}

function PrivacyPolicy({ }: Props) {
  return (
    <div className='py-28'>

      <h1 className="text-4xl text-center font-semibold">
        Sherpa&apos;s Privacy Policy
      </h1>


      <div className="space-y-16">

        <p className=' mt-10'>Sherpa is a mobile application available for Android and iOS devices. Through this app, users are able to create personal goals and objectives.</p>

        <p> Minimal amount of personal details is required to benefit from the services this App makes available. This Privacy Policy outlines what data we may collect, and how it's processed. For any further information in respect to how we value your privacy feel free to contact us by email at sherpaadmin@gmail.com.</p>



        <div className="space-y-5">
          <p className='text-center font-semibold text-xl'>Data use</p>

          <ul className='list-disc space-y-2'>
            <li>Allowing you to generate content</li>
            <li>Allowing you to engage with other users</li>
            <li>Allowing you to store data for your future reuse.</li>
          </ul>
        </div>


        <div className="space-y-5">
          <p className='text-center font-semibold text-xl'>We do not sell your data</p>

          <p>
            We will never sell or attempt to sell the data you provide us. We guarantee that the data you trust us with will never be sold or shared as a commodity. We shall only use your data as a means to benefit you in respect to your use of this App.
          </p>
        </div>


        <div className="space-y-5">

          <p className='text-center font-semibold text-xl'>Your rights</p>

          <p>As a user of our service, you maintain the right to: </p>

          <ul className='list-disc space-y-2'>
            <li>Amend or delete data you have provided us</li>
            <li>Request us to amend or delete your data</li>
            <li>Request us to provide any data we have associated with your account</li>
          </ul>
        </div>


        <div className="space-y-5">
          <p className='text-center font-semibold text-xl'>Contact us</p>

          <p>
            for further details, please reach the team via email: sherpaadmin@gmail.com
          </p>
        </div>

      </div>
    </div >
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