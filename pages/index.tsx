import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className='grid place-content-center mt-10 '>
        <h1 className='font-semibold text-gray-600 text-start text-5xl'>Lorem ipsum dolor sit amet.</h1>

        <div className='flex justify-center mt-20'>
          <Image src='/descriptions.svg' height='200' width='200' className='' />
        </div>

        <p className='text-center mt-10'>
          Track and manage your goals like never before, now with an all easy solution.
        </p>

        <div className='flex justify-center space-x-5 mt-20'>
          <button className='font-medium text-md py-3 px-5 rounded-3xl bg-brand  text-white'>Get Started</button>
          <button className='font-medium text-md py-3 px-5 rounded-3xl bg-gray-200  text-black'>Learn More</button>
        </div>
      </div>

      <div className='flex flex-col space-y-20  mt-20'>
        <div className='flex p-2'>
          <div className='flex justify-center w-1/3'>
            <Image src='/goals.svg' height='100' width='100' className='' />
          </div>
          <p className='w-2/3'>Complete your goals and earn rewards.</p>
        </div>

        {/* <div className='flex p-2'>
          <p className='w-2/3'>Stay on track</p>

          <div className='flex justify-center w-1/3'>
            <Image src='/check-list.svg' height='100' width='100' className='' />
          </div>
        </div> */}

        <div className='flex p-2'>
          <p className='w-2/3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, at.</p>

          <div className='flex justify-center w-1/3'>
            <Image src='/todo.svg' height='100' width='100' className='' />
          </div>
        </div>

        <div className='flex p-2'>
          <div className='flex justify-center w-1/3'>
            <Image src='/feedback.svg' height='100' width='100' className='' />
          </div>
          <p className='w-2/3'>Celebrate your achievements with friends, you earned it!</p>
        </div>

        <div className='flex p-2'>
          <p className='w-2/3'>Get visual progress updates to stay on track.</p>

          <div className='flex justify-center w-1/3'>
            <Image src='/progress.svg' height='100' width='100' className='' />
          </div>
        </div>

        
      </div>

      <div className='flex justify-center mt-20'>
        <Image src='/social-groups.svg' height='300' width='300' className='' />
      </div>
      <p className='text-center mt-10'>Engage in social groups and challenge your friends!</p>

      <button className='font-medium text-md py-3 px-5 rounded-3xl bg-brand  text-white w-full mt-10'>Sign Up</button>
    </div>
  );
}
