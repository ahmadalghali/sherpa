import { MagnifyingGlassIcon } from '@heroicons/react/24/solid'
import React from 'react'
import NotLoggedInLayout from '../common/components/layouts/NotLoggedInLayout'

type Props = {}

function NotFound({ }: Props) {
  return (
    <div className="py-20 flex flex-col justify-center h-screen space-y-20">
      {/* <div className="flex justify-center items-center space-x-5"> */}
      {/* <MagnifyingGlassIcon className='h-20' /> */}
      <p className='text-5xl text-center'>:(</p>
      {/* </div> */}
      <p className='text-4xl font-medium sm:text-center'>Uh oh, looks like this page does not exist.</p>
    </div>
  )
}

NotFound.getLayout = function getLayout(page: any) {
  return (

    <NotLoggedInLayout>
      {page}
    </NotLoggedInLayout>
  )
}

export default NotFound