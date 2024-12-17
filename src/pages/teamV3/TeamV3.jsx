import { teamData } from 'data/teamV3';
import { Link } from 'react-router-dom';
import './teamV3.scss';

const TeamV3 = ({ fromWhere }) => {

  return (
    <div id="teamV3-outer-container">
      <div id="teamV3-inner-container">
        <div id="header-container">
          <div id="title">Meet Our Team</div>
          <div id="desc">Our Talented And Passionate Team Who Drive Our Company Forward Everyday</div>
        </div>

        <div id="body-container">
          <div id="section-one">
            {teamData[0].map(({ id, fullName, position, imgURL }) => (
              <div key={id} className="item-container">
                <img className='item-img' src={imgURL} alt="Team Profile Image" />
                <Link to={`/team-profile/${id}/0`}> 
                  <div className="item-details">
                    <div className="name">{fullName}</div>
                    <div className="position">{position}</div>
                    <img src='/assets/arrow.png' alt="Arrow hehe" />
                  </div>
                </Link>
              </div>
            ))}
          </div>
          
          {fromWhere == 'about' ? 
              <Link to='/organization'>
                <div id='seeAllTeam'>See All Team</div> 
              </Link>
            : 
              <div id="section-two">
                {teamData[1].map(({ id, fullName, position, imgURL }) => (
                  <div key={id} className="item-container">
                    <img className='item-img' src={imgURL} alt="Team Profile Image" />
                    <Link to={`/team-profile/${id}/1`}> 
                      <div className="item-details">
                        <div className="name">{fullName}</div>
                        <div className="position">{position}</div>
                        <img src='/assets/arrow.png' alt="Arrow hehe" />
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
          }

          {/* {fromWhere == 'about' ? 
              <Link to='/organization'>
                <div id='seeAllTeam'>See All Team</div> 
              </Link>
            : 
              <>
                <div id="section-three">
                  {teamData[2].map(({ id, fullName, position, imgURL }) => (
                    <div key={id} className="item-container">
                      <img className='item-img' src={imgURL} alt="Team Profile Image" />
                      <Link to={`/team-profile/${id}/2`}> 
                        <div className="item-details">
                          <div className="name">{fullName}</div>
                          <div className="position">{position}</div>
                          <img src='/assets/arrow.png' alt="Arrow hehe" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                <div id="section-four">
                  {teamData[3].map(({ id, fullName, position, imgURL }) => (
                    <div key={id} className="item-container">
                      <img className='item-img' src={imgURL} alt="Team Profile Image" />
                      <Link to={`/team-profile/${id}/3`}> 
                        <div className="item-details">
                          <div className="name">{fullName}</div>
                          <div className="position">{position}</div>
                          <img src='/assets/arrow.png' alt="Arrow hehe" />
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>
              </>
          } */}
        </div>
      </div>
    </div>
  ) 
}

export default TeamV3;