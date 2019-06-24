import React, { Fragment } from 'react';

import GlobalStyled from './styles/global';

import Main from './pages/Main';

function App() {
  return (
    <Fragment>
      <GlobalStyled />
      <div className="App">
        <Main />
      </div>
    </Fragment>
  );
}

export default App;
