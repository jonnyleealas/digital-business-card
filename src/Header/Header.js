import './header.css'
import PortfolioPic from '../Images/portfolio-pic.jpeg'
const Header = () => {
    return (
        <div className={'header'}>
            {/* <p>PortfolioPic</p> */}
            <img className={'PortfolioPic'} src={PortfolioPic} alt={'portfolio pic Jonathon'} width={'550px'}  />
        </div>
    )
}

export default Header