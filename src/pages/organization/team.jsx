import React from 'react';
import ParticleBg from 'pages/ui/particlebg';
import './team.scss';
import SEO from '../../components/seo/seo';
import {teamData, internData} from '../../data/team';
import { SocialIcon } from 'react-social-icons'
import {Link }from 'react-router-dom';

const Team = () => {
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
                {teamData.map((team, index) => {
                    return (
                        <Link key={index} to={`/team-profile/${team.key}`}>
                            <div className="org-card">
                                <div className="org-card-img">
                                    {/* <img src={team.img} alt="profile"/> */}
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