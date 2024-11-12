import react from 'react';
import './teamProfile.scss';
import {teamData, internData} from '../../../data/team';
import ParticleBg from 'pages/ui/particlebg';
import { useParams } from 'react-router-dom';

const TeamProfile = (props) => {
    const { id, arr } = useParams();
    console.log(arr);

    // :))))))))))))))))))))))
    // const teamMember = teamData[arr]?.find(member => member.key === id);
    let teamMember; 
    arr !== undefined ? teamMember = teamData[arr].find(member => member.key === id) : teamMember = teamData.find(member => member.key === id);
    
    return (    
        <>
            <div id="teamProfileOuterContainer">
                <div id="teamProfileInnerOneContainer">
                    <div id="teamProfileAbout">
                        <div id="teamProfileHeader">
                            <h1>{teamMember.fullName}</h1>
                            <p>{teamMember.position}</p>
                        </div>
                        <div id="teamProfileInfo">
                            <h1>About</h1>
                            <p>{teamMember.content}</p>
                            <img id='linkedInLogo' src="/assets/linkedinLogo.png" alt="linkedin logo" />
                        </div>
                    </div>
                </div>
                <div id="teamProfileInnerTwoContainer">
                    <img id='teamImgUrl' src={teamMember.imgURL} alt="profile" />
                </div>
            </div>
            <ParticleBg/>
        </>
    );
};

export default TeamProfile;