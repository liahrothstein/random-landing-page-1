import { Link } from 'react-router-dom';

import './header.css';

export const Header = () => {

    return (
        <section className="header">
            <div className="logo"><span className='a'>A+</span> Studio</div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/wwd'>What We Do</Link>
                <Link to='/service'>Service</Link>
                <Link to='/project'>Project</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact</Link>
            </div>
        </section>
    )
}