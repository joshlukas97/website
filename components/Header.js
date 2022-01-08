import PropTypes from 'prop-types';
import Image from 'next/image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img className="portrait" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} src="../static/images/lake.jpg" alt="me" />
        </div>
        <div className="content">
            <div className="inner">
                <h1>Hi, I'm Josh</h1>
                <p>I am a full stack software engineer at TDS Telecom. I also love rock climbing at Devil's Lake State Park. <br></br>
                    Feel free to check me out on <a href='https://www.linkedin.com/in/josh-lukas/'>LinkedIn</a>, <a href='https://www.instagram.com/joshlukas/'>Instagram</a>, or <a 
                    href='https://www.mountainproject.com/user/111704941/josh-lukas'>Mountain Project</a>, or <a href="https://www.youtube.com/channel/UCkfvcwTxF0gTX8pOCHpKX_g">YouTube</a>.</p>
            </div>
        </div>
        <nav>
            <ul>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li> */}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="https://drive.google.com/file/d/1tjf4jqI6PelTQa1VSXQsmypZf3SKILeb/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
                <li><a href="mailto:joshlukas97@gmail.com">Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
