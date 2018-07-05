import React from 'react';
import PropTypes from 'prop-types';
import styles from './Place.css';

const Place = () => {
  return (
    <div className={styles.root}>
      <div className={styles.card}>
        <div className={'row'}>
          <div className={'col-sm-4'}>
            <div className={styles.cardLabel}>{'LOAN BALANCE'}</div>
            <div className={styles.curency}>{'$84,478'}</div>
          </div>
          <div className={'col-sm-4'}>
            <div className={styles.cardLabel}>{'MONTHLY PAYMENT'}</div>
            <div className={styles.curencyMo}>{'$644'}</div>
            <div className={styles.dueOn}>Due on July 17th 2018</div>
          </div>
          <div className={'col-sm-4'}>
            <div className={styles.cardLabel}>{'TOTAL LOAN COST'}</div>
            <div className={styles.curency}>{'$154,611'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

Place.propTypes = {
  place: PropTypes.object,
};

export default Place;
