import React from 'react';
import ParticleBg from 'pages/ui/particlebg';
import './team.scss';
import SEO from '../../components/seo/seo';
import {teamData, internData} from '../../data/team';
import { SocialIcon } from 'react-social-icons'
import {Link }from 'react-router-dom';

const Team = () => {
    console.log(window.innerWidth);

    return (
        <React.Fragment>
            <SEO title='Organization - Bitverse Corporation' 
                description='We are an information system solutions provider with core expertise on corporate automation platforms and software development. Our collective experience creating and delivering robust IT solutions for local and global companies across various industries: Telecommunications, Government, Healthcare, Real Estate, Construction, Transportation, Food Retail, Education, and Logistics' 
                keyword='Bitverse, bitverse, Bitverse Corportion, bitverse corporation, bitverse it, Bitverse it, Bitverse IT Solutions, Bitverse Employee, Bitverse Employees, Bitverse Organization' 
                name='Bitverse Corporation' 
                type='website'/>
            <div className="org--wrap">
                <div className="org-header">
                    <h1>Meet the Team</h1>
                </div>
                <div className="org-content">
                    <div id="sectionOne">
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
                    </div>

                    <div id="sectionTwo">
                        <div id="innerOneSectionTwo">
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-purple.png" alt="marker"/>
                                <img className='bookMarkIconTwo' src="/assets/book-mark-greenish.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[1][0].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[1][0].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[1][0].fullName}</h2>
                                    <p className="team-position">{teamData[1][0].position}</p>
                                </div>
                            </div> 
                        </div>
                        <div id="innerTwoSectionTwo">
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-purple.png" alt="marker"/>
                                <img className='bookMarkIconTwo' src="/assets/book-mark-red.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[1][1].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[1][1].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[1][1].fullName}</h2>
                                    <p className="team-position">{teamData[1][1].position}</p>
                                </div>
                            </div>                                  
                        </div>
                    </div>

                    <div id="sectionThree">
                        <div id='innerOneSectionThree'>
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-greenish.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[11].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[11].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[11].fullName}</h2>
                                    <p className="team-position">{teamData[11].position}</p>
                                </div>
                            </div>                    
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-greenish.png" alt="marker"/>
                                <img className='bookMarkIconTwo' src="/assets/book-mark-blue.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[5].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[5].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[5].fullName}</h2>
                                    <p className="team-position">{teamData[5].position}</p>
                                </div>                           
                            </div>
                        </div>
                        <div id='innerTwoSectionThree'>
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                <img className='bookMarkIconTwo' src="/assets/book-mark-lightblue.png" alt="marker"/>
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
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                <img className='bookMarkIconTwo' src="/assets/book-mark-yellow.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[3].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[3].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[3].fullName}</h2>
                                    <p className="team-position">{teamData[3].position}</p>
                                </div>
                            </div>
                            <div className="orgCard">
                            <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[4].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[4].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[4].fullName}</h2>
                                    <p className="team-position">{teamData[4].position}</p>
                                </div>
                            </div> 
                        </div> 
                    </div>

                    <div id="sectionFour">
                        <div id='innerOneSectionFour'>
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-blue.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[6].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[6].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[6].fullName}</h2>
                                    <p className="team-position">{teamData[6].position}</p>
                                </div>
                            </div>                    
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-blue.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[10].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[10].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName longNames">{teamData[10].fullName}</h2>
                                    <p className="team-position">{teamData[10].position}</p>
                                </div>
                            </div>
                        </div>
                        <div id='innerTwoSectionFour'>
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-lightblue.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[7].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[7].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[7].fullName}</h2>
                                    <p className="team-position">{teamData[7].position}</p>
                                </div>
                            </div> 
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-yellow.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[9].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[9].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[9].fullName}</h2>
                                    <p className="team-position">{teamData[9].position}</p>
                                </div>
                            </div> 
                            <div className="orgCard">
                                <img className='bookMarkIconOne' src="/assets/book-mark-red.png" alt="marker"/>
                                <div className="org-card-img">
                                    {teamData[8].imgURL === '' ?
                                        <img src="/assets/blank-icon.png" alt="profile"/>
                                        :
                                        <img src={teamData[8].imgURL} alt="profile"/>
                                    }
                                </div>
                                <div className="org-card-content">
                                    <h2 className="team-fullName">{teamData[8].fullName}</h2>
                                    <p className="team-position">{teamData[8].position}</p>
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