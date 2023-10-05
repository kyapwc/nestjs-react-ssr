import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { StoreProvider, useStoreContext } from './contexts';

const Test = ({ name }) => {
  const storeContext = useStoreContext();

  return <div>TESTING, {name}</div>;
};

const App = (props) => {
  return (
    <StoreProvider>
      <StaticRouter location={props.url}>
        <Routes>
          <Route path="/waybill" element={<Test {...props} />} />
          <Route path="/" element={<div>LOL, {props.name}</div>} />
        </Routes>
      </StaticRouter>
    </StoreProvider>
  );
};

export default App;
