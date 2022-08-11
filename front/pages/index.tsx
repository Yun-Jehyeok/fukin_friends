import type { NextPage } from 'next';
import { useState } from 'react';

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
    { name: 'Home', comp: <Home /> },
    { name: 'Event', comp: <Event /> },
    { name: 'Notice', comp: <Notice /> },
    { name: 'Album', comp: <Album /> },
    { name: 'Play list', comp: <PlayList /> },
    { name: 'Feed', comp: <Feed /> },
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
            return item.comp;
          }
        })}
      </Body>
    </AppContainer>
  );
};

export default App;
