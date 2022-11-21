import PublicPageLayout from "@/common/components/layouts/PublicPageLayout";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="">
      <div className="grid place-content-center">
        <h1 className="font-semibold text-gray-800 text-start text-5xl">
          Lorem ipsum dolor sit amet.
        </h1>

        <div className="flex justify-center mt-20">
          <Image
            alt="image"
            src="/assets/descriptions.svg"
            height="200"
            width="200"
            className=""
          />
        </div>

        <p className="text-center mt-10">
          Track and manage your goals like never before, now with an all easy
          solution.
        </p>

        <div className="flex justify-center space-x-10 mt-20">
          <Link href="/login" className="btn-primary">
            Get Started
          </Link>
          <Link href="/about-us" className="btn-secondary">
            Learn More
          </Link>
        </div>
      </div>

      <div className="bg-black flex justify-center mt-20  rounded-lg w-full">
        <video autoPlay muted loop height={200} width={200}>
          <source src="/sherpa-flutter-demo.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="flex flex-col space-y-20  mt-20">
        <div className="flex p-2 items-center space-x-10">
          <div className="flex justify-center w-1/3">
            <Image
              alt="image"
              src="/assets/goals.svg"
              height="200"
              width="200"
              className=""
            />
          </div>
          <p className="w-2/3">Complete your goals and earn rewards.</p>
        </div>

        {/* <div className='flex p-2 items-center space-x-10'>
          <p className='w-2/3'>Stay on track</p>

          <div className='flex justify-center w-1/3'>
            <Image alt="image" src='/check-list.svg' height='100' width='100' className='' />
          </div>
        </div> */}

        <div className="flex p-2 items-center space-x-10">
          <p className="w-2/3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ea, at.
          </p>

          <div className="flex justify-center w-1/3">
            <Image
              alt="image"
              src="/assets/todo.svg"
              height="200"
              width="200"
              className=""
            />
          </div>
        </div>

        <div className="flex p-2 items-center space-x-10">
          <div className="flex justify-center w-1/3">
            <Image
              alt="image"
              src="/assets/feedback.svg"
              height="200"
              width="200"
              className=""
            />
          </div>
          <p className="w-2/3">
            Celebrate your achievements with friends, you earned it!
          </p>
        </div>

        <div className="flex p-2 items-center space-x-10">
          <p className="w-2/3">Get visual progress updates to stay on track.</p>

          <div className="flex justify-center w-1/3">
            <Image
              alt="image"
              src="/assets/progress.svg"
              height="200"
              width="200"
              className=""
            />
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-20">
        <Image
          alt="image"
          src="/assets/social-groups.svg"
          height="300"
          width="300"
          className=""
        />
      </div>
      <p className="text-center mt-10">
        Engage in social groups and challenge your friends!
      </p>

      <Link href="/register">
        <div className="btn-primary text-center w-full mt-10">Sign Up</div>
      </Link>
    </div>
  );
}

Home.getLayout = function getLayout(page: any) {
  return <PublicPageLayout>{page}</PublicPageLayout>;
};
