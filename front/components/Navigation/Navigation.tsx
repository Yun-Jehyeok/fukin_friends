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
import { NavigationContainer, IconContainer, HoverBar, DivisionItem, NavItem } from './style';

interface Item {
  id: string;
  name: string;
  icon?: IconProp;
  clicked?: boolean;
  class?: string;
}

interface child {
  handleChangeView: (name: string) => void;
  isOpen: boolean;
}

const Navigation: NextPage = ({ handleChangeView, isOpen }: child) => {
  const [itemList, setItemList] = useState<Item[]>([
    {
      id: '1',
      name: 'Home',
      icon: faHouse,
      clicked: true,
    },
    {
      id: '2',
      name: 'Feed',
      icon: faBars,
      clicked: false,
    },
    {
      id: '3',
      name: 'EVENT',
      class: 'division',
    },
    {
      id: '4',
      name: 'Notice',
      icon: faBolt,
      clicked: false,
    },
    {
      id: '5',
      name: 'Event',
      icon: faFlag,
      clicked: false,
    },
    {
      id: '6',
      name: 'COLLECTIONS',
      class: 'division',
    },
    {
      id: '7',
      name: 'Album',
      icon: faImage,
      clicked: false,
    },
    {
      id: '8',
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
    <NavigationContainer isOpen={isOpen}>
      {itemList.map((item) =>
        item.class ? (
          <DivisionItem key={item.id}>
            {item.name}
          </DivisionItem>
        ) : (
          <NavItem
            key={item.id}
            data-name={item.name}
            data-clicked={item.clicked}
            onClick={handleChangeNavigation}
          >
            <IconContainer>
              <FontAwesomeIcon icon={item.icon} />
            </IconContainer>
            <div>{item.name}</div>
          </NavItem>
        ),
      )}
    </NavigationContainer>
  );
};

export default Navigation;
