import { Link } from 'react-router-dom';

import './header.css';

export const Header = () => {

    return (
        <section className="header">
            <div className="logo"><span className='a'>A+</span> Studio</div>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/'>What We Do</Link>
                <Link to='/'>Service</Link>
                <Link to='/'>Project</Link>
                <Link to='/'>Blog</Link>
                <Link to='/'>Contact</Link>
            </div>
        </section>
    )
}