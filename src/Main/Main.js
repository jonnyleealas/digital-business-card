import Header from '../Header/Header'
import Info from '../Info/Info'
import About from '../About/About'
import Interests from '../Interests/Interests'
import Footer from '../Footer/Footer'
import './main.css'

const Main = () => {
    return (
        <div className={'main'}>
            <div>

                <Header />
            </div>
            <div>
                <Info />
                <About />
                <Interests />
            </div>

            <Footer />
        </div>
    )
}

export default Main