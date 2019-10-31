import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AccountState } from '../account/state/state';
import { Role } from '../role/role';
import { Default } from '../defualt/default';

const App: React.FC = () => {
  const account = useSelector((state: AccountState) => state.account);

  return (
    <BrowserRouter>
      {account.isLoggedIn ?
        <Role /> : <Default />
      }
    </BrowserRouter>
  );
}

export default App;
