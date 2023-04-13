import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import boxSearch from '../../assets/box-search.png';
import code from '../../assets/code.png';
import emptyWallet from '../../assets/empty-wallet.png';
import chartSquare from '../../assets/chart-square.png';
import blueRectangle from '../../assets/blue-rectangle.png';
import pinkEllipse from '../../assets/pink-ellipse.png';
import rectangle from '../../assets/rectangle.png';
import dots from '../../assets/dots.png';

import './service.css';

export const Service = () => {

    return (
        <section className="service">
            <Header />
            <div className="mainContainer">
                <div className="main">
                    <div className="description">
                        <div className="header">How can we help your Business ?</div>
                        <div className="text">We build readymade websites, mobile applications, and elaborate online business services.</div>
                    </div>
                    <div className="blocks">
                        <div className="firstGroup">
                            <div className="block">
                                <div className="img">
                                    <img src={boxSearch} alt="" />
                                </div>
                                <div className="header">Business Idea Planning</div>
                                <div className="text">We present you a proposal and discuss niffty-gritty like</div>
                            </div>
                            <div className="block">
                                <div className="img">
                                    <img src={code} alt="" />
                                </div>
                                <div className="header">Development Website and App</div>
                                <div className="text">Communication protocols apart from engagement models</div>
                            </div>
                        </div>
                        <div className="secondGroup">
                            <div className="block">
                                <div className="img">
                                    <img src={emptyWallet} alt="" />
                                </div>
                                <div className="header">Financial Planning System</div>
                                <div className="text">Protocols apart from aengage models, pricing billing</div>
                            </div>
                            <div className="block">
                                <div className="img">
                                    <img src={chartSquare} alt="" />
                                </div>
                                <div className="header">Market Analysis Project</div>
                                <div className="text">Protocols apart from aengage models, pricing billing</div>
                            </div>
                        </div>
                    </div>
                    <img className='blueRectangle' src={blueRectangle} alt="" />
                    <img className='pinkEllipse' src={pinkEllipse} alt="" />
                    <img className='rectangle' src={rectangle} alt="" />
                    <img className='dots' src={dots} alt="" />
                </div>
            </div>
            <Footer />
        </section>
    )
}