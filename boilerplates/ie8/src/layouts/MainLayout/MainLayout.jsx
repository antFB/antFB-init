import React, { Component, PropTypes } from 'react';
//import { Router, Route, IndexRoute, Link } from 'react-router';
import styles from './MainLayout.less';
/* <Link to="/">All</Link><br />
          <Link to="/actived">Actived</Link><br />
          <Link to="/completed">Completed</Link><br />
          <Link to="/404">404</Link><br /> */
const MainLayout = ({ children }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.head}>
        <h1>Todo App</h1>
        <div>This is sample site, ie8+</div>
      </div>
      <div className={styles.content}>
        <div className={styles.side}>
          <h2>Filters:</h2>
          
        </div>
        <div className={styles.main}>
          {children}
        </div>
      </div>
      <div className={styles.foot}>
        Built with antFB-init, antFB, React ...
      </div>
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default MainLayout;
