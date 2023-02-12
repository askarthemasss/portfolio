import { FaGithub, FaTwitter, FaLinkedin } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { RxCube } from 'react-icons/rx';

const SocialLinks = ({fontSize, gap}) => {
    // Style
    const divStyles = {
        margin : "1rem"
    }
    const ulStyles = {
        display : "flex",
        gap : gap,
        listStyleType :"none",
    }
    return ( 
        <div className="social-media-links" style={divStyles}>
            <ul style={ulStyles}>
                <li title='Github'><a href="https://github.com/askarthemasss" target="_blank" rel="noopener noreferrer"><FaGithub size={fontSize || 25}/></a></li>
                <li title='LinkedIn'><a href="https://www.linkedin.com/in/mohamed-askar-a-9370a1b2/" target="_blank" rel="noopener noreferrer"><FaLinkedin size={fontSize || 25}/></a></li>
                <li title='Twitter'><a href="https://twitter.com/askarthemass" target="_blank" rel="noopener noreferrer"><FaTwitter size={fontSize || 25}/></a></li>
                <li title='Codesandbox'><a href="https://codesandbox.io/u/askarthemasss" target="_blank" rel="noopener noreferrer"><RxCube size={fontSize || 25}/></a></li>
                <li title='Email'><a href="mailto:mohamedaskar476@gmail.com"><MdEmail size={fontSize || 25}/></a></li>
            </ul>
        </div>
     );
}
 
export default SocialLinks;