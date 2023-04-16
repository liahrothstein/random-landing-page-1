import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import miniBlueRectangle from '../../assets/mini-blue-rectangle.png';
import playButton from '../../assets/play-button.png';
import video from '../../assets/video.png';
import yellowEllipse from '../../assets/yellow-ellipse.png';

import './project.css';

export const Project = () => {

    return (
        <section className="project">
            <Header />
            <div className="mainContainer">
                <div className="main">
                    <div className="video">
                        <img src={video} alt="video" />
                        <div className="button">
                            <img src={playButton} alt="" />
                        </div>
                    </div>
                    <div className="description">
                        <div className="header">Great Digital Product Agency since 2016 </div>
                        <div className="text">Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.</div>
                    </div>
                    <img className='rectangle' src={miniBlueRectangle} alt="" />
                    <img className='ellipse' src={yellowEllipse} alt="" />
                </div>
            </div>
            <Footer />
        </section>
    )
}