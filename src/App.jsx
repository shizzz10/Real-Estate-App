import { GlobalStyles } from './styles/Global'
import './App.css'
import Banner from './components/Banner'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import News from './components/News'
import ProductHead from './components/ProductHead'

function App() {

  return (
    <div>
    <GlobalStyles />
    <Navbar />
    <ProductHead />
    <Banner />
    <News />
    <Footer />
    </div>
  )
}

export default App
