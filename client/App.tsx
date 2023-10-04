import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { StoreProvider } from './contexts';

const Test = ({ name }) => {
  return <div>TESTING, {name}</div>;
};

const App = ({ url, name }) => {
  return (
    <StoreProvider>
      <StaticRouter location={url}>
        <Routes>
          <Route path="/waybill" element={<Test name={name} />} />
          <Route path="/" element={<div>LOL, {name}</div>} />
        </Routes>
      </StaticRouter>
    </StoreProvider>
  );
};

export default App;
