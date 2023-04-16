import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import blueRectangle from '../../assets/big-blue-rectangle.png';
import dots from '../../assets/mini-dots.png';
import rectangle from '../../assets/rectangle.png';

import './contact.css';

export const Contact = () => {

    return (
        <section className="contact">
            <Header />
            <div className="mainContainer">
                <div className="main">
                    <div className="description">
                        <div className="header">Subscribe Newsletter</div>
                        <div className="text">I will update good news and promotion service not spam</div>
                    </div>
                    <div className="blueRectangle">
                        <img src={blueRectangle} alt="" />
                        <div className="contact">
                            <input type="text" placeholder='Enter your email address..' />
                            <button type='button'>Contact Now</button>
                        </div>
                    </div>
                    <img className='dots' src={dots} alt="" />
                    <img className='rectangle' src={rectangle} alt="" />
                </div>
            </div>
            <Footer />
        </section>
    )
}