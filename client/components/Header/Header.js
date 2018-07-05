import React from 'react';
import classNames from 'classnames';
import styles from './Header.css';

const Header = () => (
  <div className={styles.root}>
    <a href="/">Overview</a>
    <a href="/#/recommendations">Recommendations
      <span className={classNames(styles.iconImportant, 'fa-stack fa-lg iconImportant')}>
        <i className="fa fa-square fa-stack-2x"></i>
        <i className={classNames(styles.colorBlack, 'fa fa-exclamation fa-stack-1x colorBlack')}></i>
      </span>
    </a>
  </div>
);

export default Header;
