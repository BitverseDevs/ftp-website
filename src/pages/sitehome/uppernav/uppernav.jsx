import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import HamburgerIcon from './hamburgerIcon/hamburgerIcon';
import { useNavigate } from "react-router-dom";
import { Modal } from '@mui/material';
import ContactUs from 'pages/contactus/contactus';
import './uppernav.scss';

export function Uppernav(props) {
    const navigate = useNavigate();
    const navListArr = Object?.values(props?.navList);
    const [isFixed, setIsFixed] = useState(false);
    const [showModal, setShowModal] = useState(false);

    const handleScroll = () => {
        const scrollThreshold = 600; // Adjust this value to your desired scroll amount
        const currentScrollY = window.scrollY;
    
        if (currentScrollY >= scrollThreshold && !isFixed) {
          setIsFixed(true);
        } else if (currentScrollY < scrollThreshold && isFixed) {
          setIsFixed(false);
        }
    };

    // show modal
    const modalClick = () => setShowModal(!showModal);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);

    return (
        <div id='uppernav-outer-wrap' style={{position: `${isFixed ? 'fixed' : 'relative'}`, top: isFixed ? '0px' : ''}}>
            <ContactUs 
                open={showModal}
                onClose={modalClick}
            />
            <div className={isFixed ? 'uppernav-wrap upperNav-wrap-style-two' : 'uppernav-wrap'}>
                <Link to={'/'}>
                    <div className='uppernav-logo'>
                        <img src='/assets/bitverse-logo.png' alt='logo'/>
                    </div>
                </Link>
                <ul className='uppernav-navItems'>
                    {navListArr.map((item)=> (
                        <li key={item.key}>
                            {item.navItem == 'BOOK A DEMO' ? 
                                <div className='bookDemoNavItem' onClick={modalClick}>
                                    {item.navItem}
                                </div>
                            : 
                                <NavLink style={({ isActive }) => ({
                                    color: isActive ? '#4d1c91' : 'black',
                                })} 
                                to={item.pathUrl}>{item.navItem}</NavLink>
                            }
                        </li>
                    ))}
                </ul>
                {navListArr.map((item)=> {
                    if(item.isButton === false){
                        return;
                    } else {
                        return (
                            <Link to={'/contact-us'}>
                                <button className={'uppernav-button'} key={item.key}>
                                    {item.navItem}
                                </button>
                            </Link>
                        )
                    }
                })}
                <div className='uppernav-burger--wrap'>
                    <HamburgerIcon navList={navListArr} scrollToSection={props.scrollToSection}/>
                </div>
            </div>
        </div>
    );
}


export default Uppernav;