import google from '../../assets/google.png';
import airbnb from '../../assets/airbnb.png';
import uberEats from '../../assets/uber-eats.png';
import amazon from '../../assets/amazon.png';

import './our-clients.css';

export const OurClients = () => {

    return (
        <section className="ourClients">
            <div className="container">
                <div className="description">
                    <div className="header">Our Client</div>
                    <div className="text">Several selected clients, who already believe in our service.</div>
                </div>
                <img src={google} alt="Google Logo" />
                <img src={airbnb} alt="Airbnb Logo" />
                <img src={uberEats} alt="Uber Eats Logo" />
                <img src={amazon} alt="Amazon Logo" />
            </div>
        </section>
    )
}