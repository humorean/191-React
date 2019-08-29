import React from 'react';
import {Link} from 'react-router-dom';
import Gallery from './Gallery';
import Audition from './Audition';
import Home from './Home';
import Banner from './Banner';


class Navigation extends React.Component{
    render(){
        return(
            <div className='nav'>
                <Banner />
                <ul>
                    <li className='nav-item'><Link to='/' component={Home}>Home</Link></li>
                    <li className='nav-item'><Link to='/gallery' component={Gallery}>Gallery</Link></li>
                    <li className='nav-item'>Request Band</li>
                    <li className='nav-item'><Link to='audition' component={Audition}>Audition</Link></li>
                    <li className='nav-item'>Contact</li>
                </ul>
            </div>
        )
    }
}

export default Navigation;