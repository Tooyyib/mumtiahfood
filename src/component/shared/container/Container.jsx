import Header from '../header/Header'
import Footer from '../footer/Footer'


const Container = ({children}) => {
  return (
    <div className=''>
        <Header />
        {children}
        <Footer />
    </div>
  )
}
export default Container
