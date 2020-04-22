import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AuthContext from './context/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <AuthContext.Provider value={{ name: 'Jerp' }}>
      <SignIn />
    </AuthContext.Provider>
  </>
);

export default App;
