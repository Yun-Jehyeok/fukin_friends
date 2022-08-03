import {
  faBars,
  faBolt,
  faFlag,
  faHouse,
  faImage,
  faMusic,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { NextPage } from 'next';
import { Container, IconContainer } from './style';

const Navigation: NextPage = () => {
  return (
    <Container>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faHouse} />
        </IconContainer>
        <div>Home</div>
      </div>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faBars} />
        </IconContainer>
        <div>Feed</div>
      </div>

      <div className="division">Event</div>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faBolt} />
        </IconContainer>
        <div>Notice</div>
      </div>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faFlag} />
        </IconContainer>
        <div>Event</div>
      </div>

      <div className="division">Collections</div>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faImage} />
        </IconContainer>
        <div>Album</div>
      </div>
      <div>
        <IconContainer>
          <FontAwesomeIcon icon={faMusic} />
        </IconContainer>
        <div>Play list</div>
      </div>
    </Container>
  );
};

export default Navigation;
