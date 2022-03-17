import React from 'react';
import Layout from './components/Layout';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
  return (
    <React.Fragment>
      <GlobalStyles />
      <Layout />
    </React.Fragment>
  );
};

export default App;
