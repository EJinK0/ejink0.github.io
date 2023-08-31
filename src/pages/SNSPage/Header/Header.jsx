import React from 'react';
import './Header.scss';
import logo from '../../../images/logo.svg';
import feedDac from '../../../images/feed-dac.svg';
import prifileDac from '../../../images/profile-dac.svg';

function Header() {
  return (
    <div className='header'>
        <div className='wrapper'>
            <div className='logo'>
                <img src={logo} alt='로고'/>
            </div>

            <nav className='navigation'>
                <ul className='nav-wrapper'>
                    <li className='nav'>
                        <img src={feedDac} alt='피드로 가기'/>
                    </li>
                    <li className='nav'>
                        <img src={prifileDac} alt='프로필로 가기'/>
                    </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Header
