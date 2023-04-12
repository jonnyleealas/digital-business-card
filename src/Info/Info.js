import EmailPic from '../Images/emailButton.png'
import LinkedInButton from '../Images/linkedInButton.png'
import './info.css'
const Info = () => {
    return (
        <div className={'info'}>
            <h1 className={'h1-info'}>Jonathon Lee</h1>
                <p className={'p-info'}>Software Developer</p>
                <p className={'website-link'}>Website Link</p>
                <div className={'info-buttons'}>
                <img src={EmailPic} alt={'email button'} />
                <img src={LinkedInButton} alt={'linkedin button'} />

                </div>
        </div>
    )
}

export default Info