import React, { Component, PropTypes } from 'react';
import Todos from './Todos/Todos';
import MainLayout from '../layouts/MainLayout/MainLayout';
import {DatePicker} from 'antFB';

const App = ({ location }) => {
  return (
    <MainLayout>
      <Todos location={location} />
      <DatePicker />
    </MainLayout>
  );
};

App.propTypes = {
    
};

export default App;
