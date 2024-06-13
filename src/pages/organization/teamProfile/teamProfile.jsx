import react from 'react';
import './teamProfile.scss';
import {teamData} from '../../../data/team';
import ParticleBg from 'pages/ui/particlebg';

const TeamProfile = () => {
    return (
        <>
            <div className="team-profile--wrap">
                <div className="team-profile--content">
                    <div className="team-profile--img">
                        <img src="/assets/jhumer_pic.jpg" alt="profile"/>
                    </div>

                    <div className="team-profile--aboutme">
                        <div className="team-profile--aboutme-header">
                            <h1>John Doe</h1>
                            <p>Front-end Developer</p>
                        </div>

                        <div className="team-profile--text">
                            <h1>About Me</h1>
                            <p>Fritzgerald Monzon is a dedicated Software Developer Staff Intern with a passion for all things tech and innovation. When he's not immersed in programming and software development, you can find him lost in the worlds of gaming, manga, or engaging in a battle of wits over a chessboard. Fritzgerald's love for adventure extends to cycling, where he explores new paths and embraces the thrill of the ride.

Even from a young age, Fritzgerald showed promise, earning a notable award that hinted at his future success in the field. His enthusiasm for programming, software development, cybersecurity, and data analysis shines through in everything he does, as he constantly seeks new challenges and opportunities to grow professionally. Fritzgerald Monzon is not just a software whiz; he's a dynamic individual who thrives on pushing boundaries and unlocking the full potential of technology.</p>
                        </div>
                    </div>
                </div>
            </div>
            <ParticleBg/>
        </>
    );
}

export default TeamProfile;