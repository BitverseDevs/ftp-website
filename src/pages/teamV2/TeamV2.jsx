import Carousel from 'react-multi-carousel';
import { teamData } from 'data/teamV2';
import { Link } from 'react-router-dom';
import './teamV2.scss';
import "react-multi-carousel/lib/styles.css";

const TeamV2 = () => {

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    }
  };

  return (
    <div id="teamV2-outer-container">
      <div id="teamV2-inner-container">
        <div id="teamV2-container">
          <div id="teamV2-header-container">
            <div id="teamV2-title">
              Meet Our Team
            </div>
            <div id="teamV2-featMsg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nobis ratione facilis architecto, necessitatibus repudiandae assumenda possimus!
            </div>
          </div>
          <ul id="teamV2-carousel">
            <Carousel
              responsive={responsive}
              containerClass='teamV2-carousel-container'
              itemClass='teamV2-carousel-items'
            >
              {teamData.map(({key, fullName, position, imgURL, linkedInURL}, index) => (
                <li className="teamV2-carousel-item-container" key={index}>
                  <Link to={`/team-profile/${key}`}> 
                    <img className='teamV2-carousel-item-profile' src={imgURL} alt="Profile Image"/>
                  </Link>

                  <div className="teamV2-carousel-item-fullName">{fullName}</div>
                  <div className="teamV2-carousel-item-position">{position}</div>
                </li>
              ))}
            </Carousel>
            
          </ul>
        </div>
      </div>
    </div>
  )
}

export default TeamV2;