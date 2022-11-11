import React from 'react'
import PublicPageLayout from '../components/PublicPageLayout'

type Props = {}

function AboutUs({ }: Props) {
  return (
    <article className='py-28 prose'>

      <h1>
        About us
      </h1>


      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus soluta a ea. Ipsum molestiae amet consequatur vel quos dicta ipsam?</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, consequuntur deleniti blanditiis voluptatibus delectus dolores esse sed eligendi obcaecati accusamus quam molestias placeat laudantium aliquid nemo numquam perspiciatis? Fugiat facere voluptatem tempora ut deserunt dolores obcaecati necessitatibus nihil expedita. Enim velit tenetur incidunt possimus laboriosam doloribus aliquam blanditiis, quidem quis.</p>

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur voluptatem ipsam cumque, temporibus delectus adipisci cupiditate dolore molestiae consequuntur nostrum modi maxime omnis illum, quos aspernatur tempora accusantium a voluptatibus?</p>
    </article >
  )
}

AboutUs.getLayout = function getLayout(page: any) {
  return (
    <PublicPageLayout>
      {page}
    </PublicPageLayout>
  )
}

export default AboutUs