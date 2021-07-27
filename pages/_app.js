import Footer from '../src/layouts/Footer/Footer'
import Navbar from '../src/layouts/Navbar/Navbar'
import Contact from '../src/modules/Contact/Contact'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Navbar />
      <Component {...pageProps} />
    <Footer/>
  </>
  )
}

const App = (props) => (
  <MyApp {...props}/>
)
export default App
