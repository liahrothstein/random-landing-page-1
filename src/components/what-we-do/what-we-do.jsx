import { Link } from 'react-router-dom';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { OurClients } from '../our-clients/our-clients';

import dots from '../../assets/dots.png';
import ellipse from '../../assets/ellipse.png';
import rectangle from '../../assets/rectangle.png';
import whatWeDo from '../../assets/what-we-do.png';

import './what-we-do.css';

export const WhatWeDo = () => {

    return (
        <section className="whatWeDo">
            <Header />
            <div className="mainContainer">
                <div className="main">
                    <div className="description">
                        <div className="header">A Digital Product Agency</div>
                        <div className="text">Leading digital agency with solid design and development expertise. We build readymade websites, mobile applications, and elaborate online business services.</div>
                        <Link to='/contact'>
                            <button type='button'>Contact Now</button>
                        </Link>
                    </div>
                    <div className="mainImg">
                        <img src={whatWeDo} alt="What We Do" />
                        <img className='ellipse' src={ellipse} alt="What We Do" />
                        <img className='rectangle' src={rectangle} alt="What We Do" />
                    </div>
                    <img className='dots' src={dots} alt="" />
                </div>
            </div>
            <OurClients />
            <Footer />
        </section>
    )
}