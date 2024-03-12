import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <>
            <header className="header clearfix">
                <div className="header-left">

                    <button className="nav-icon" onClick={() => document.body.classList.toggle('menu-toggle')}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>

                    <a href="dashboard.html" title="Logo" className="logo">
                        <em>W</em>A
						</a>

                    <input type="text" className="search-input" placeholder="Search..." />
                </div>

                <ul className="header-right">
                    <Dropdown as="li" className="notification-dropdown">

                        <Dropdown.Toggle as="a">
                            <i><img src={process.env.PUBLIC_URL + '/assets/images/icon-notification.png'} alt="Notification" /></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu menuAlign="right">
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Notifiction 01</Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Notifiction 02</Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Notifiction 03</Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Notifiction 04</Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Notifiction 05</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Dropdown as="li" className="user-dropdown">

                        <Dropdown.Toggle as="a">
                            <i><img src={process.env.PUBLIC_URL + '/assets/images/user-dropdown-icon.jpg'} alt="User Dropdown" /></i>
                            <span>John Marsh</span>
                        </Dropdown.Toggle>

                        <Dropdown.Menu menuAlign="right">
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Edit</Dropdown.Item>
                            <Dropdown.Item onClick={e => e.preventDefault()} href="-">Setting</Dropdown.Item>
                            <Link to='/Login' className="dropdown-item">Logout</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                </ul>
            </header>
        </>
    );
};

export default Header;