import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './uppernav.scss';
import HamburgerIcon from './hamburgerIcon/hamburgerIcon';

export function Uppernav(props) {
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
                    {/* <img src='/assets/bitverse-logo-darkblue-blue.png'/> */}
                    {'b'}<p>it</p>{'verse'}<p className='uppernav-logo--symbol'>{'>>'}</p>
                </div>
            </Link>
            <ul className='uppernav-navItems'>
                {navListArr.map((item)=> {
                    if(item.isButton === true){
                        return;
                    } else {
                        return (
                            <li key={item.key}>
                                <Link to={item.pathUrl}>{item.navItem}</Link>
                            </li>
                        )
                    }
                })}
            </ul>
            {navListArr.map((item)=> {
                if(item.isButton === false){
                    return;
                } else {
                    return (
                        <button className={'uppernav-button'} key={item.key}>
                            {item.navItem}
                        </button>
                    )
                }
            })}
            <div className='uppernav-burger--wrap'>
                <HamburgerIcon navList={navListArr}/>
            </div>
        </div>
        </React.Fragment>
    );
}


export default Uppernav;