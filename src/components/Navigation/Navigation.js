import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu'

import './navigation.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


const Navigation = () => {

    return (
        <Fragment>
            <div className='nav-container'>
                <div className='nav-left'>
                    <Link to='/' className='nav-left__item nav-link'><FontAwesomeIcon className='icon' icon='bus' /></Link>
                </div>
                <div className='nav-right'>
                    <Link to='/' className='nav-right__item nav-link'>HOME</Link>
                    <Link to='/participants' className='nav-right__item nav-link'>PARTICIPANTS</Link>
                    <Link to='/purchases' className='nav-right__item nav-link'>PURCHASES</Link>
                    <Link to='/owes' className='nav-right__item nav-link'>OWES</Link>
                </div>
            </div>
            <div className='nav-container-mobile'>
                <Menu width={ '50%' }>
                    <Link to='/' className='menu-item'>HOME</Link>
                    <Link to='/purchases' className='menu-item'>PURCHASES</Link>
                    <Link to='/participants' className='menu-item'>PARTICIPANTS</Link>
                    <Link to='/owes' className='menu-item'>OWES</Link>
                </Menu>
            </div>
        </Fragment>
    )
}

export default Navigation;