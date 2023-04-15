import { Footer } from '../footer/footer';
import { Header } from '../header/header';

import activePag from '../../assets/active-pag.png';
import pag from '../../assets/pag.png';
import mainClient from '../../assets/main-client.png';
import miniDots from '../../assets/mini-dots.png';
import yellowEllipse from '../../assets/yellow-ellipse.png';
import pinkEllipse from '../../assets/pink-ellipse.png';
import client1 from '../../assets/client1.png';
import client2 from '../../assets/client2.png';
import client3 from '../../assets/client3.png';
import client4 from '../../assets/client4.png';
import client5 from '../../assets/client5.png';
import client6 from '../../assets/client6.png';
import client7 from '../../assets/client7.png';
import client8 from '../../assets/client8.png';

import './blog.css';

export const Blog = () => {

    return (
        <section className="blog">
            <Header />
            <div className="mainContainer">
                <div className="header">
                    <div className="text">What our happy client say</div>
                    <div className="description">Several selected clients, who already believe in our service.</div>
                </div>
                <div className="main">
                    <div className="mainImg">
                        <img src={mainClient} alt="" />
                    </div>
                    <div className="description">
                        <div className="header">Matthew Paul</div>
                        <div className="text">Perfect, very good job! Thank you for the amazing design and work. Really impressed with the high quality and quick turnaround time. Highly recommend.</div>
                        <div className="pagination">
                            <img src={activePag} alt="" />
                            <img src={pag} alt="" />
                            <img src={pag} alt="" />
                            <img src={pag} alt="" />
                            <img src={pag} alt="" />
                        </div>
                    </div>
                    <div className="miniImages">
                        <img src={client1} alt="client1" />
                        <img src={client2} alt="client2" />
                        <img src={client3} alt="client3" />
                        <img src={client4} alt="client4" />
                        <img src={client5} alt="client5" />
                        <img src={client6} alt="client6" />
                        <img src={client7} alt="client7" />
                        <img src={client8} alt="client8" />
                    </div>
                    <img className='miniDots' src={miniDots} alt="" />
                    <img className='yellowEllipse' src={yellowEllipse} alt="" />
                    <img className='pinkEllipse' src={pinkEllipse} alt="" />
                </div>
            </div>
            <Footer />
        </section>
    )
}