import react from 'react';
import './teamProfile.scss';
// import {teamData, internData} from '../../../data/team';
import { teamData } from 'data/teamV3';
import ParticleBg from 'pages/ui/particlebg';
import { useParams } from 'react-router-dom';
import { techStackData, sirMarc, sirJhumer, jhioStack, osamaStack } from 'data/tech-stack';

const TeamProfile = (props) => {
    const { id, arr } = useParams();

    // :))))))))))))))))))))))
    let teamMember; 
    arr !== undefined ? teamMember = teamData[arr].find(member => member.id === id) : teamMember = teamData.find(member => member.id === id);

    let anotherArr = ['AlbertPagaduan', 'MarcRovicBaja', 'JhumerApus', 'JhonJhioDalagan', "OsamaVelasco", 'WilsonVargas', 'DeniaLeeAlgas', 'JMSalado'];

    let iterator = anotherArr.indexOf(id);
    let checker = anotherArr.includes(id);

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
                            {checker ?  
                            <div id='iconContainer'>
                                {techStackData[iterator].map(({section, items}, index) => (
                                    <div className='techStackContainer'>
                                        {/* <div className='techSection'>{section}</div> */}
                                        <span className='techSection'>
                                            <span>{section}</span>
                                            {items.map((item, index) => (
                                                <img key={index} className='iconsbaby' src={`${item.iconName}`} alt="img" />
                                            ))}
                                        </span>
                                    </div>
                                ))}
                            </div> : ''}
                        </div>
                    </div>
                </div>
                <div id="teamProfileInnerTwoContainer">
                    <img id='teamImgUrl' src={teamMember.imgURL} alt="profile" />
                </div>
            </div>
        </>
    );
};

export default TeamProfile;