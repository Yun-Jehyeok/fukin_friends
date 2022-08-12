import type { NextPage } from 'next';
import { Fragment, useState } from 'react';

import { Body, AppContainer } from 'styles/styleRepo/style';

import Header from 'components/Header/Header';
import Navigation from 'components/Navigation/Navigation';
import Home from 'components/View/Home/Home';
import Event from 'components/View/Event/Event';
import Notice from 'components/View/Notice/Notice';
import Album from 'components/View/Album/Album';
import PlayList from 'components/View/PlayList/PlayList';
import Feed from 'components/View/Feed/Feed';

const App: NextPage = () => {
  const [path, setPath] = useState<string>('Home');
  const [component, setComponent] = useState([
    { id: 1, name: 'Home', comp: <Home /> },
    { id: 2, name: 'Event', comp: <Event /> },
    { id: 3, name: 'Notice', comp: <Notice /> },
    { id: 4, name: 'Album', comp: <Album /> },
    { id: 5, name: 'Play list', comp: <PlayList /> },
    { id: 6, name: 'Feed', comp: <Feed /> },
  ]);

  const handleChangeView = (name: string) => {
    setPath(name);
  };

  return (
    <AppContainer>
      <Header />
      <Body>
        <Navigation handleChangeView={handleChangeView} />
        {component.map((item) => {
          if (item.name === path) {
            return <Fragment key={item.id}>{item.comp}</Fragment>;
          }
        })}
      </Body>
    </AppContainer>
  );
};

export default App;
