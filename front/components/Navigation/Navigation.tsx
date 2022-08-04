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
import { useState } from 'react';
import { Container, IconContainer } from './style';

const Navigation: NextPage = () => {
  const [itemList, setItemList] = useState([
    {
      name: 'Home',
      icon: faHouse,
      clicked: true,
    },
    {
      name: 'Feed',
      icon: faBars,
      clicked: false,
    },
    {
      name: 'Event',
      class: 'division',
    },
    {
      name: 'Notice',
      icon: faBolt,
      clicked: false,
    },
    {
      name: 'Event',
      icon: faFlag,
      clicked: false,
    },
    {
      name: 'Collections',
      class: 'division',
    },
    {
      name: 'Album',
      icon: faImage,
      clicked: false,
    },
    {
      name: 'Play list',
      icon: faMusic,
      clicked: false,
    },
  ]);

  const handleChangeView = (e: React.MouseEvent<HTMLDivElement>) => {
    let tempList = itemList.map((item) => {
      item.clicked = false;

      if (item.name === e.currentTarget.dataset.name) {
        item.clicked = true;
      }

      return item;
    });

    setItemList(tempList);
  };

  return (
    <Container>
      {itemList.map((item) =>
        item.class ? (
          <div key={item.name} className={item.class}>
            item.name
          </div>
        ) : (
          <div
            key={item.name}
            data-name={item.name}
            data-clicked={item.clicked}
            onClick={handleChangeView}
          >
            <IconContainer>
              <FontAwesomeIcon icon={item.icon} />
            </IconContainer>
            <div>{item.name}</div>
          </div>
        ),
      )}
    </Container>
  );
};

export default Navigation;
