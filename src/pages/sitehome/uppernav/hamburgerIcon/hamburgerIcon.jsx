import React, { useState } from 'react';
import { Link, useNavigate, NavLink } from 'react-router-dom';
import ContactUs from 'pages/contactus/contactus';
import { Menu, MenuItem, Button } from '@mui/material';
import './hamburgerIcon.scss';


export function HamburgerIcon(props) {
    const navigate = useNavigate();
    const [isToggle, setIsToggle] = useState(false);
    const navListArr = Object.values(props?.navList);
    const [showModal, setShowModal] = useState(false);
    const [anchorEle, setAnchorEle] = useState(null);
    const open = Boolean(anchorEle);

    // show modal
    const modalClick = () => setShowModal(!showModal);

 // handle anchor
    const handleClick = (e) => {
        setAnchorEle(e.currentTarget);
    }

    const handleClose = (e) => {
        navigate(`/${e.target.id}`, { replace: true });
        setAnchorEle(null);
    }

    return (
        <div className={`${'hamburger-icon--nav-wrap'} ${isToggle ? 'toggled': ''}`} onClick={()=>{setIsToggle(!isToggle)}}>
            <ContactUs 
                open={showModal}
                onClose={modalClick}
            />
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
            <summary className='hamburger-icon--container'>
                <div className='hamburger-icon--bar1'></div>
                <div className='hamburger-icon--bar2'></div>
                <div className='hamburger-icon--bar3'></div>
            </summary>
            <ul className='hamburger-icon--nav-list'>
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

                {/* {navListArr.map((item)=>{
                    if(item.navItem === 'PRODUCTS'){
                        return(
                            <li className='hamburger-icon--nav-item' onClick={() => props.scrollToSection('section1', item.pathUrl, navigate)}>
                                <Link to={item.pathUrl}><p>{item.navItem}</p></Link>
                            </li>
                        )
                    }else{
                        return(
                            <Link to={item.pathUrl}>
                                <li className='hamburger-icon--nav-item'>
                                    <p>{item.navItem}</p>
                                </li>
                            </Link>
                        )
                    }
                })} */}
            </ul>
        </div>
    );
}

export default HamburgerIcon;