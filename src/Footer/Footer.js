import './footer.css'
import Twitter from '../Images/TwitterIcon.png'
import Facebook from '../Images/FacebookIcon.png'
import Instagram from '../Images/InstagramIcon.png'
import GitHub from '../Images/GitHubIcon.png'
const Footer = () => {
    return (
        <div className="footer">
            <div className={'images'}>
                <img src={Twitter} alt={'twitter logo'} width={'25px'} height={'25px'} />
                <img src={Facebook} alt={'facebook logo'} width={'25px'} height={'25px'} />
                <img src={Instagram} alt={'instagram logo'} width={'25px'} height={'25px'} />
                <img src={GitHub} alt={'github logo'} width={'25px'} height={'25px'} />
            </div>

        </div>
    )
}

export default Footer