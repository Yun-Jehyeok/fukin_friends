import { IconProp } from '@fortawesome/fontawesome-svg-core';
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
import { NavigationContainer, IconContainer } from './style';

interface Item {
  name: string;
  icon?: IconProp;
  clicked?: boolean;
  class?: string;
}

interface child {
  handleChangeView: (name: string) => void;
}

const Navigation: NextPage = ({ handleChangeView }: child) => {
  const [itemList, setItemList] = useState<Item[]>([
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

  const handleChangeNavigation = (e: React.MouseEvent<HTMLDivElement>) => {
    let tempList = itemList.map((item) => {
      item.clicked = false;

      if (item.name === e.currentTarget.dataset.name) {
        item.clicked = true;
      }

      return item;
    });

    handleChangeView(e.currentTarget.dataset.name || 'Home');
    setItemList(tempList);
  };

  return (
    <NavigationContainer>
      {itemList.map((item) =>
        item.class ? (
          <div key={item.name} className={item.class}>
            {item.name}
          </div>
        ) : (
          <div
            key={item.name}
            data-name={item.name}
            data-clicked={item.clicked}
            onClick={handleChangeNavigation}
          >
            <IconContainer>
              <FontAwesomeIcon icon={item.icon} />
            </IconContainer>
            <div>{item.name}</div>
          </div>
        ),
      )}
    </NavigationContainer>
  );
};

export default Navigation;
