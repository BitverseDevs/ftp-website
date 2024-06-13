import React from 'react';
import ParticleBg from 'pages/ui/particlebg';
import './team.scss';
import SEO from '../../components/seo/seo';
import {teamData} from '../../data/team';
import { SocialIcon } from 'react-social-icons'

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
                    <h1>Meet the <p>Team</p></h1>
                </div>
                <div className="org-content">
                {teamData.map((team, index) => {
                    return (

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
                                    <p className="team-content">{team.content}</p>
                                    <p className="team-position">{team.position}</p>
                                </div>
                                <div className="org-card-social">
                                    <SocialIcon className="org-card-socialIcons" url={team.fbUrl} target="_blank"/>
                                    <SocialIcon className="org-card-socialIcons" url={team.twitterURL} target="_blank"/>
                                    <SocialIcon className="org-card-socialIcons" url={team.linkedInURL} target="_blank"/>
                                </div>
                            </div>
                    )
                }
                )}
                </div>
            </div>
            <ParticleBg/>
        </React.Fragment>
        
    );
}

export default Team;