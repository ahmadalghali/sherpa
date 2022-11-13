import React from 'react'
import PublicPageLayout from '../common/components/layouts/PublicPageLayout'

type Props = {}

function ContactUs({ }: Props) {
  return (
    <article className='prose'>

      <h1>
        Contact us
      </h1>

      <p>
        For further details, please reach the team via email: <b>sherpaadmin@gmail.com</b>
      </p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta a ea. Ipsum molestiae amet consequatur vel quos dicta ipsam?</p>

    </article >
  )
}

ContactUs.getLayout = function getLayout(page: any) {
  return (
    <PublicPageLayout>
      {page}
    </PublicPageLayout>
  )
}

export default ContactUs