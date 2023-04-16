import facebook from '../../assets/facebook.png';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';

import './footer.css';

export const Footer = () => {

    return (
        <section className="footer">
            <div className="container">
                <div className="logoAndText">
                    <div className="logo"><span className="a">A+</span> Studio</div>
                    <div className="text">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
                    <div className="socials">
                        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer"><img src={facebook} alt="" /></a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><img src={twitter} alt="" /></a>
                        <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="" /></a>
                    </div>
                </div>
                <div className="whatWeDo">
                    <div className="header">What We Do</div>
                    <div className="links">
                        <a href="#">Web Design</a><br />
                        <a href="#">App Design</a><br />
                        <a href="#">Social Media Manage</a><br />
                        <a href="#">Market Analysis Project</a>
                    </div>
                </div>
                <div className="company">
                    <div className="header">Company</div>
                    <div className="links">
                        <a href="#">About Us</a><br />
                        <a href="#">Career</a><br />
                        <a href="#">Become Investor</a>
                    </div>
                </div>
                <div className="support">
                    <div className="header">Support</div>
                    <div className="links">
                        <a href="#">FAQ</a><br />
                        <a href="#">Policy</a><br />
                        <a href="#">Business</a>
                    </div>
                </div>
                <div className="contact">
                    <div className="header">Contact</div>
                    <div className="links">
                        <a href="#">WhatsApp</a><br />
                        <a href="#">Support 24</a>
                    </div>
                </div>
            </div>
            <div className="copyrights">
                <div className="text">Copyright © 2022 Avi Yansah</div>
            </div>
        </section>
    )
}