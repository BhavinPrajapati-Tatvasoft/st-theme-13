import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <>
            <aside className="sidebar">
                <div className="p-4">
                    <Link to='/Dashboard' title="Logo" className="logo">
                        <em>Web</em>Admin
                    </Link>
                    {/* <a href="dashboard.html" >
                        
				</a> */}
                    <img src={process.env.PUBLIC_URL + '/assets/images/user-img.jpg'} alt="" className="user-img" />
                    <p className="user-name medium-text">Kenny Rigdon</p>
                    <span className="status offline">Online</span>
                </div>

                {/* Main Navigation */}
                <nav className="main-navigation">
                    <ul>
                        <li className="active">
                            <Link to='/Dashboard' title="Dashboard">
                                <i><img src={process.env.PUBLIC_URL + '/assets/images/icon-dashboard.png'} alt="Dashboard" /></i>Dashboard
                            </Link>
                        </li>
                        <li>
                            <Link to='/Innerpage' title="Layouts">
                                <i><img src={process.env.PUBLIC_URL + '/assets/images/icon-layout.png'} alt="Layout" /></i>Layouts
                            </Link>
                        </li>
                        <li><a onClick={e => e.preventDefault()} href="-" title="Pages"><i><img src={process.env.PUBLIC_URL + '/assets/images/icon-pages.png'} alt="Pages" /></i>Pages</a></li>
                        <li><a onClick={e => e.preventDefault()} href="-" title="UI Elements"><i><img src={process.env.PUBLIC_URL + '/assets/images/icon-elements.png'} alt="Elements" /></i>UI Elements</a></li>
                        <li><a onClick={e => e.preventDefault()} href="-" title="Charts"><i><img src={process.env.PUBLIC_URL + '/assets/images/icon-charts.png'} alt="Charts" /></i>Charts</a></li>
                        <li><a onClick={e => e.preventDefault()} href="-" title="Structure"><i><img src={process.env.PUBLIC_URL + '/assets/images/icon-structure.png'} alt="Structure" /></i>Structure</a></li>
                        <li><a onClick={e => e.preventDefault()} href="-" title="Widgets"><i><img src={process.env.PUBLIC_URL + '/assets/images/icon-widgets.png'} alt="Widgets" /></i>Widgets</a></li>
                    </ul>
                </nav>
                {/* End Main Navigation */}
            </aside>
            <div className="menu-overlay" onClick={() => document.body.classList.remove('menu-toggle')}></div>
        </>
    );
};

export default Sidebar;