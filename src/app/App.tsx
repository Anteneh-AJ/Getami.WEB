import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AccountState } from '../account/state/state';
import { Role } from '../role/role';
import { Account } from "../account/account";
const App: React.FC = () => {
  const account = useSelector((state: AccountState) => state.account);

  return (
    <BrowserRouter>
      {account.isLoggedIn ?
        <Role /> : <Account />
      }
    </BrowserRouter>
  );
}

export default App;
