import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Main from './components/Main';
import { UserProvider } from './components/UserContext';


const App = () => {
  return (
    <UserProvider>
      <div>
        <BrowserRouter>
          <Main />
        </BrowserRouter>
      </div>
    </UserProvider>
  );
}

export default App;
