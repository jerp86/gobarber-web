import React from 'react';

import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
// import SignUp from './pages/SignUp';

import ToastContainer from './components/ToastContainer';
import { AuthProvider } from './hooks/AuthContext';

const App: React.FC = () => (
  <>
    <GlobalStyles />
    <ToastContainer />

    <AuthProvider>
      <SignIn />
    </AuthProvider>
  </>
);

export default App;
