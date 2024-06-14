import react from 'react';
import './teamProfile.scss';
import {teamData} from '../../../data/team';
import ParticleBg from 'pages/ui/particlebg';
import { useParams } from 'react-router-dom';

const TeamProfile = (props) => {
    const { id } = useParams();
    console.log(id);

    const teamMember = teamData.find(member => member.key === id);

    return (    
        <>
            <div className="team-profile--wrap">
                <div className="team-profile--content">
                    <div className="team-profile--img">
                        <img src={teamMember.imgURL} alt="profile"/>
                    </div>

                    <div className="team-profile--aboutme">
                        
                        <div className="team-profile--aboutme-header">
                            <h1>{teamMember.fullName}</h1>

                            <p>{teamMember.position}</p>

                            
                        </div>

                        <div className="team-profile--text">
                            <h1>About Me</h1>
                            <p>{teamMember.content}</p>
                        </div>
                    </div>
                </div>
            </div>
            <ParticleBg/>
        </>
    );
};

export default TeamProfile;