import SocialLinks from "./SocialLinks";
import Resume from "../documents/Resume.pdf"
import Image from "../documents/askar-profile.jpeg"

const About = () => {
    return ( 
        <>
            <div className="about-me-main">
                <div className="about-me-left">
                    <h1>I'm Askar</h1>
                    <p className="about-me-bio">
                        ‣ A Professional, Self-taught Software Developer (specializing in React Applications)
                        with almost 2 Years of Industrial Experience. Worked on SaaS customization and
                        Implementations.
                        <br /><br />
                        ‣ I don't limit myself within a particular tech stack, I'm more of a Problem Solver.
                        I learnt (and still learning) what the problem requires to solve.
                        <br /><br />
                        ‣ View My <a href={Resume}>Resume</a>.
                    </p>
                    <SocialLinks gap={"3rem"} />
                    <br /><br />
                    <ul>
                        <li>Add services - zoho, low-code, Frontend,...</li>
                        <li>Add Tech stack</li>
                        <li>Try adding github stats</li>
                    </ul>
                </div>
                <div className="about-me-right">
                    <img className="profile-image" src={Image} alt="My Profile" />
                </div>
            </div>
            <div className="about-me-footer">
                
            </div>
        </>
     );
}
 
export default About;