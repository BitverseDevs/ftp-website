import react from 'react';
import './teamProfile.scss';
import {teamData, internData} from '../../../data/team';
import ParticleBg from 'pages/ui/particlebg';
import { useParams } from 'react-router-dom';
import { sirRevTechStack, sirMarc, sirJhumer } from 'data/tech-stack';

const TeamProfile = (props) => {
    const { id, arr } = useParams();

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
                            <div id='upperProfileInfo'>
                                <h1>About</h1>
                                <img id='linkedInLogo' src="/assets/linkedinLogo.png" alt="linkedin logo" />
                            </div>
                            <p>{teamMember.content}</p>
                            <div id='iconContainer'>
                                {teamMember.fullName == 'Albert Pagaduan' ? sirRevTechStack.map((element, index) => (
                                    <img className='iconsbaby' src={`${element.iconName}`} alt="img" />
                                )) : ''}
                                {teamMember.fullName == 'Marc Rovic Baja' ? sirMarc.map((element, index) => (
                                    <img className='iconsbaby' src={`${element.iconName}`} alt="img" />
                                )) : ''}
                                {teamMember.fullName == 'Jhumer O. Apus' ? sirJhumer.map((element, index) => (
                                    <img className='iconsbaby' src={`${element.iconName}`} alt="img" />
                                )) : ''}
                            </div>
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