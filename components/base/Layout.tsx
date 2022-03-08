import Footer from './Footer'
import Header from './Header'

const Layout = ({ children }: any) => {
  return (
    <>
      <Header />
      <div className='h-[100vh]'>{children}</div>
      <Footer />
    </>
  )
}

export default Layout
