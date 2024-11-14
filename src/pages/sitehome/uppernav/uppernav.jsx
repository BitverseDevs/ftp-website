import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import './uppernav.scss';
import HamburgerIcon from './hamburgerIcon/hamburgerIcon';
import { useNavigate } from "react-router-dom";

export function Uppernav(props) {
    const navigate = useNavigate();
    const navListArr = Object?.values(props?.navList);
    const [isFixed, setIsFixed] = useState(false);
    const handleScroll = () => {
        const scrollThreshold = 200; // Adjust this value to your desired scroll amount
        const currentScrollY = window.scrollY;
    
        if (currentScrollY >= scrollThreshold && !isFixed) {
          setIsFixed(true);
        } else if (currentScrollY < scrollThreshold && isFixed) {
          setIsFixed(false);
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [isFixed]);
    return (
        <React.Fragment>
        <div className='uppernav-wrap' style={{position: `${isFixed? 'fixed': 'relative'}`, top: isFixed? '0px': '' }}>
            <Link to={'/'}>
                <div className='uppernav-logo'>
                    <img src='/assets/bitverse-logo.png' alt='logo'/>
                </div>
            </Link>
            <ul className='uppernav-navItems'>
                {navListArr.map((item)=> (
                    <li key={item.key}>
                        <NavLink style={({ isActive }) => ({
                            color: isActive ? '#4d1c91' : 'black',
                        })} 
                        className={item.navItem === 'BOOK A DEMO' ? 'bookDemoNavItem' : ''}
                        to={item.pathUrl}>{item.navItem}</NavLink>
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
        </React.Fragment>
    );
}


export default Uppernav;