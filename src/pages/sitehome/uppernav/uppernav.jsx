import React, {useState, useEffect} from 'react';
import { Link, NavLink } from 'react-router-dom';
import HamburgerIcon from './hamburgerIcon/hamburgerIcon';
import { useNavigate } from "react-router-dom";
import ContactUs from 'pages/contactus/contactus';
import { Menu, MenuItem, Button } from '@mui/material';
import './uppernav.scss';

export function Uppernav(props) {
    const navigate = useNavigate();
    const navListArr = Object?.values(props?.navList);
    const [isFixed, setIsFixed] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [anchorEle, setAnchorEle] = useState(null);
    const open = Boolean(anchorEle);

    const handleScroll = () => {
        const scrollThreshold = 300; // Adjust this value to your desired scroll amount
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

    // handle anchor
    const handleClick = (e) => {
      setAnchorEle(e.currentTarget);
    }
    
    const handleClose = (e) => {
      navigate(`/${e.target.id}`, { replace: true });
      setAnchorEle(null);
    }

    return (
        // <div id='uppernav-outer-wrap' style={{position: `${isFixed ? 'fixed' : 'relative'}`, top: isFixed ? '0px' : ''}}>
        
        <div id='uppernav-outer-wrap' style={{ position: isFixed ? 'sticky' : 'absolute', top: isFixed ? '0' : '0' }}>
            <ContactUs 
                open={showModal}
                onClose={modalClick}
            />
            <div className='uppernav-wrap'>
                <Link to={'/'}>
                    <div className='uppernav-logo'>
                        <img src='/assets/bitverse-logo.png' alt='logo'/>
                    </div>
                </Link>
                <ul className='uppernav-navItems'>
                    <>
                      {/* <div onClick={handleClick}>About</div> */}
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEle}
                        open={open}
                        onClose={handleClose}
                      >
                        <MenuItem id='community' onClick={handleClose}>Community</MenuItem>
                        <MenuItem id='about' onClick={handleClose}>About Bitverse</MenuItem>
                        <MenuItem id='organization' onClick={handleClose}>Organization</MenuItem>
                      </Menu>
                    </>
                    {navListArr.map((item)=> (
                        <li key={item.key}>
                            {item.key == 'und07' ? 
                              <div className='bookDemoNavItem' onClick={modalClick}>
                                {item.navItem}
                              </div>
                            :  item.key == 'und02' ? 
                                <div id='aboutCTA' onClick={handleClick}>About</div>
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