import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import AppProvider from './hooks';

const App: React.FC = () => (
  <>
    <GlobalStyles />

    <AppProvider>
      <SignIn />
    </AppProvider>
  </>
);

export default App;
