import { GlobalStyles } from '../styles/Global'
import Banner from './Banner'
import Footer from './Footer'
import Navbar from './Navbar'
import News from './News'
import ProductHead from './ProductHead'

const HomePage = () => {
  return (
    <div>
       <GlobalStyles />
    <Navbar   />
    <ProductHead />
    <Banner />
    <News />
    <Footer  />
    </div>
  )
}

export default HomePage;
