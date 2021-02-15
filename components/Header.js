import PropTypes from 'prop-types';
import Image from 'next/image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome'
import faGem from '@fortawesome/fontawesome-free-regular/faGem'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            {/*<span className="icon fa-diamond"></span>*/}
            {/* <FontAwesomeIcon icon={faGem} transform="grow-18" /> */}
            {/* <Image></Image> */}
            <img className="portrait" style={{ maxWidth: '100%', height: 'auto', borderRadius: '50%' }} src="../static/images/lake.jpg" alt="me" />

        </div>
        <div className="content">
            <div className="inner">
                <h1>Hi, I'm Josh</h1>
                <p>I am currently a full stack software engineer at TDS Telecom. I also love rock climbing at Devil's Lake State Park. <br></br>
                    Feel free to check out my <a href="https://github.com/joshlukas97">Github</a> or my <a href='https://www.instagram.com/joshlukas/'>Instagram</a>.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('intro')}}>Intro</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Work</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
