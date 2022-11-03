import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: any) {

  const isLoggedIn = true
  return (
    <>
      <Navbar />
      <main className='pb-32 pt-12 max-w-5xl mx-auto px-8 bg-slate-200'>{children}</main>
      {isLoggedIn ? <Footer /> : <></> }
    </>
  )
}