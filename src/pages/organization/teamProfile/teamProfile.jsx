import react, { Fragment } from 'react';
import './teamProfile.scss';
import {teamData, internData} from '../../../data/team';
import ParticleBg from 'pages/ui/particlebg';
import { useParams } from 'react-router-dom';

const TeamProfile = (props) => {
    const { id } = useParams();
    console.log(id);

    const teamMember = teamData.find(member => member.key === id) ? teamData.find(member => member.key === id) : internData.find(member => member.key === id);

    return (    
        <Fragment>
            <div className="team-profile--wrap">
                <div className="flex md:flex-row flex-col gap-8 p-12 items-center max-w-[1400px]">
                    <div className="rounded-full overflow-hidden w-80 h-80">
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
        </Fragment>
    );
};

export default TeamProfile;