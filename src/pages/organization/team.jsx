import React from 'react';
import ParticleBg from 'pages/ui/particlebg';
import './team.scss';
import SEO from '../../components/seo/seo';
import {teamData, internData} from '../../data/team';
import { SocialIcon } from 'react-social-icons'
import {Link }from 'react-router-dom';

const Team = () => {

    teamData[5].map((element) => {
        console.log(element);
    })

    return (
        <React.Fragment>
            <SEO title='Organization - Bitverse Corporation' 
                description='We are an information system solutions provider with core expertise on corporate automation platforms and software development. Our collective experience creating and delivering robust IT solutions for local and global companies across various industries: Telecommunications, Government, Healthcare, Real Estate, Construction, Transportation, Food Retail, Education, and Logistics' 
                keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Employee, Bitverse Employees, Bitverse Organization' 
                name='Bitverse Corporation' 
                type='website'/>
            <div className="org--wrap">
                <div className="org-header">
                    <h1>Meet our Team</h1>
                </div>
                <div className="org-content">
                    <div id="sectionOne">   
                        <Link to={`/team-profile/${teamData[0].key}`}>
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-purple.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[0].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[0].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[0].fullName}</h2>
                                    <p className="team-position">{teamData[0].position}</p>
                                </div>
                            </div>                        
                        </Link>
                    </div>

                    <div id="sectionTwo">
                        <div id="sectionTwoFirstInner">
                            <div id="sectionTwoSecondInner">
                                <div className="sectionTwoSecondInnerHeader">
                                    <h1>Sales and Marketing Deparment</h1>
                                </div>  
                                <Link to={`/team-profile/${teamData[1].key}`}>
                                    <div className="orgCard">
                                        <img className='bookMarkIconOne' src="/assets/book-mark-purple.png" alt="marker"/>
                                        <img className='bookMarkIconTwo' src="/assets/book-mark-greenish.png" alt="marker"/>
                                        <div className="org-card-img">
                                            {teamData[1].imgURL === '' ?
                                                <img src="/assets/blank-icon.png" alt="profile"/>
                                                :
                                                <img src={teamData[1].imgURL} alt="profile"/>
                                            }
                                        </div>
                                        <div className="org-card-content">
                                            <h2 className="team-fullName">{teamData[1].fullName}</h2>
                                            <p className="team-position">{teamData[1].position}</p>
                                        </div>
                                    </div> 
                                </Link>
                                <div id='innerOneSectionThree'>
                                    <div id='sectionTwoSecondInnerCtnOne'>
                                        {teamData[5].map((element, index) => (
                                            <Link to={`/team-profile/${element.key}/${5}`}>
                                                <div className="orgCard" key={index}>
                                                    {index === 0 ? 
                                                        <img className='bookMarkIconOne' src="/assets/book-mark-greenish.png" alt="marker"/>
                                                        : 
                                                        <>
                                                            <img className='bookMarkIconOne' src="/assets/book-mark-greenish.png" alt="marker"/>
                                                            <img className='bookMarkIconTwo' src="/assets/book-mark-blue.png" alt="marker"/>
                                                        </>
                                                    }
                                                    <div className="org-card-img">
                                                        {element.imgURL === '' ?
                                                            <img src="/assets/blank-icon.png" alt="profile"/>
                                                            :
                                                            <img src={element.imgURL} alt="profile"/>
                                                        }
                                                    </div>
                                                    <div className="org-card-content">
                                                        <h2 className="team-fullName">{element.fullName}</h2>
                                                        <p className="team-position">{element.position}</p>
                                                    </div>
                                                </div>                
                                            </Link>
                                        ))}
                                    </div>
                                    <div id='sectionTwoSecondInnerCtnTwo'>
                                        {teamData[6].map((element, index) => (
                                            <Link to={`/team-profile/${element.key}/${6}`}>
                                                <div className="orgCard">
                                                    <img className='bookMarkIconOne' src="/assets/book-mark-blue.png" alt="marker"/>
                                                    <div className="org-card-img">
                                                        {element.imgURL === '' ?
                                                            <img src="/assets/blank-icon.png" alt="profile"/>
                                                            :
                                                            <img src={element.imgURL} alt="profile"/>
                                                        }
                                                    </div>
                                                    <div className="org-card-content">
                                                        <h2 className="team-fullName">{element.fullName}</h2>
                                                        <p className="team-position">{element.position}</p>
                                                    </div>
                                                </div>                    
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="newSectionThree">
                            <div id="newInnerSectionThree">
                                <div className="sectionThreeSecondInnerHeader">
                                    <h1>Technical Deparment</h1>
                                </div>  
                                <Link to={`/team-profile/${teamData[2].key}`}>
                                    <div className="orgCard">
                                        <img className='bookMarkIconOne' src="/assets/book-mark-purple.png" alt="marker"/>
                                        <img className='bookMarkIconTwo' src="/assets/book-mark-red.png" alt="marker"/>
                                        <div className="org-card-img">
                                            {teamData[2].imgURL === '' ?
                                                <img src="/assets/blank-icon.png" alt="profile"/>
                                                :
                                                <img src={teamData[2].imgURL} alt="profile"/>
                                            }
                                        </div>
                                        <div className="org-card-content">
                                            <h2 className="team-fullName">{teamData[2].fullName}</h2>
                                            <p className="team-position">{teamData[2].position}</p>
                                        </div>
                                    </div>   
                                </Link>
                                <div id='innerTwoSectionThree'>
                                    <div id='newSectionThreeInnerCtn'>
                                        <div id='innerTwoSectionFour'>
                                            {teamData[3].map((element, index) => (
                                                <Link to={`/team-profile/${element.key}/${3}`}>
                                                    <div className="orgCard">
                                                        <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                                        <img className='bookMarkIconTwo' src="/assets/book-mark-lightblue.png" alt="marker"/>
                                                        <div className="org-card-img">
                                                            {element.imgURL === '' ?
                                                                <img src="/assets/blank-icon.png" alt="profile"/>
                                                                :
                                                                <img src={element.imgURL} alt="profile"/>
                                                            }
                                                        </div>
                                                        <div className="org-card-content">
                                                            <h2 className="team-fullName">{element.fullName}</h2>
                                                            <p className="team-position">{element.position}</p>
                                                        </div>
                                                    </div> 
                                                </Link>
                                            ))}
                                        </div>
                                        
                                        <div id='innerTwoSectionFour'>
                                            {teamData[7].map((element, index) => (
                                                <Link to={`/team-profile/${element.key}/${7}`}>
                                                    <div className="orgCard">
                                                        <img className='bookMarkIconOne' src="/assets/book-mark-lightblue.png" alt="marker"/>
                                                        <div className="org-card-img">
                                                            {element.imgURL === '' ?
                                                                <img src="/assets/blank-icon.png" alt="profile"/>
                                                                :
                                                                <img src={element.imgURL} alt="profile"/>
                                                            }
                                                        </div>
                                                        <div className="org-card-content">
                                                            <h2 className="team-fullName">{element.fullName}</h2>
                                                            <p className="team-position">{element.position}</p>
                                                        </div>
                                                    </div> 
                                                </Link>
                                            ))}
                                        </div>     
                                    </div>
                                    
                                    <div id='sectionThreeInnerCtnTwo'>
                                        {teamData[4].map((element, index) => (
                                            <Link to={`/team-profile/${element.key}/${4}`}>
                                                <div className="orgCard">
                                                    <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                                    <div className="org-card-img">
                                                        {element.imgURL === '' ?
                                                            <img src="/assets/blank-icon.png" alt="profile"/>
                                                            :
                                                            <img src={element.imgURL} alt="profile"/>
                                                        }
                                                    </div>
                                                    <div className="org-card-content">
                                                        <h2 className="team-fullName">{element.fullName}</h2>
                                                        <p className="team-position">{element.position}</p>
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>  
                            </div>
                        </div>
                    </div>

                    {/* <div id="sectionFifth">
                        <div className="orgCard">
                            
                        </div>                        
                    </div> */}

                    {/* {teamData.map((team, index) => {
                        return (
                            <Link key={index} to={`/team-profile/${team.key}`}>
                                <div className="org-card">
                                    <div className="org-card-img">
                                        <img src={team.img} alt="profile"/>
                                        {team.imgURL === '' ?
                                            <img src="/assets/blank-icon.png" alt="profile"/>
                                            :
                                            <img src={team.imgURL} alt="profile"/>
                                        }
                                    </div>
                                    <div className="org-card-content">
                                        <h2 className="team-fullName">{team.fullName}</h2>
                                        <p className="team-position">{team.position}</p>
                                    </div>
                                </div>
                            </Link>
                        )
                    })} */}
                </div>
                {/* <div className="org-header">
                    <h1>Meet the <p>Interns</p></h1>
                </div>
                <div className="org-content">
                    {internData.map((team, index) => {
                        return (
                            <Link key={index} to={`/team-profile/${team.key}`}>
                                <div className="org-card">
                                    <div className="org-card-img">
                                        {team.imgURL === '' ?
                                            <img src="/assets/blank-icon.png" alt="profile"/>
                                            :
                                            <img src={team.imgURL} alt="profile"/>
                                        }
                                    </div>
                                    <div className="org-card-content">
                                        <h2 className="team-fullName">{team.fullName}</h2>
                                        <p className="team-position">{team.position}</p>
                                    </div>
                    
                                </div>
                            </Link>
                        )
                    }
                    )}
                </div> */}
            </div>
            <ParticleBg/>
        </React.Fragment>
        
    );
}

export default Team;