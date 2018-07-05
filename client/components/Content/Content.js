import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Content.css';

const Content = () => {
  return (
    <div className={styles.root}>
      <div className={'panel-group'}>
        <div className={classNames(styles.panel, 'panel panel-default')}>
          <div className={classNames(styles.panelHeading, 'panel-heading')}>
            <h4 className="panel-title">
              <b>Loan details</b> <a data-toggle="collapse" href="#collapse1"><i className={classNames(styles.angleRight, 'fas fa-angle-down')}></i></a>
            </h4>
          </div>
          <div id="collapse1" className="panel-collapse collapse">
            <hr />
            <div className={'row'}>
              <div className={classNames(styles.panelBody, 'panel-body')}><div><div className={styles.detailsText}>Your details</div> <a className={styles.aView} >View account</a> </div>
                <div className={'col-sm-4'}>
                  <div className={styles.cardDetails}>
                    <b>{'Do you have another account'}</b>
                    <div>{'Adding all you accounts helps Pillar give you better recommendations!'}</div>
                    <button type="button" className={classNames(styles.btnDetails, 'btn btn-primary')}>No</button>
                    <button type="button" className={classNames(styles.btnDetails, 'btn btn-primary')}>Add Account</button>
                  </div>
                </div>
                <div className={'col-sm-4'}>
                  <div className={styles.cardDetails}>
                    <b>{'Our question here'}</b>
                    <div>{'Pillar uses your income to provide recomemndations!'}</div>
                    <button type="button" className={classNames(styles.btnDetails, 'btn btn-primary')}>Dismissive</button>
                    <button type="button" className={classNames(styles.btnDetails, 'btn btn-primary')}>Progressive cta</button>
                  </div>
                </div>
                <div className={'col-sm-4'}>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={'row'}>
        <div className={classNames(styles.panelBody, 'panel-body')}><div className={styles.LabelHeaderText}>Help center <a className={styles.aView} >View All</a></div>
          <div className={classNames(styles.helpCenterContent, 'row')}>
            <div className={'col-sm-8'}>
              <div><i className={classNames(styles.iconContent, 'fa fa-bank fa-2x fa-pull-left')}></i></div>
              <b>{'having trouble making your monthly payments?'}</b>
              <div>{'Pillar can help you find ways to lower you monthly payments by selecting a new payment plan for by temporarly deffering you loan. Find out what if right for you.'}</div>
            </div>
            <div className={classNames(styles.aHelpCenterContent, 'col-sm-2')}><a>{'Explore your option'}</a></div>
          </div>
          <div className={classNames(styles.helpCenterContent, 'row')}>
            <div className={'col-sm-8'}>
              <i className={classNames(styles.iconContent, 'fas fa-user-friends fa-2x fa-pull-left')}></i>
              <b>{'Is it time to ask for a raise'}</b>
              <div>{'Pillar uses your income to provide recomemndations!'}</div>
            </div>
            <div className={classNames(styles.aHelpCenterContent, 'col-sm-2')}><a>{'Lets go'}</a></div>
          </div>
          <div className={classNames(styles.helpCenterContent, 'row')}>
            <div className={'col-sm-8'}>
              <i className={classNames(styles.iconContent, 'far fa-question-circle fa-2x fa-pull-left')}></i>
              <b>{'Our question here'}</b>
              <div>{'Pillar uses your income to provide recomemndations!'}</div>
            </div>
            <div className={classNames(styles.aHelpCenterContent, 'col-sm-2')}><a>{'Explore refinancing'}</a></div>
          </div>
          <div className={classNames(styles.helpCenterContent, 'row')}>
            <div className={'col-sm-8'}>
              <i className={classNames(styles.iconContent, 'fa fa-search fa-2x fa-pull-left fa-flip-horizontal')}></i>
              <b>{'Our question here'}</b>
              <div>{'Pillar uses your income to provide recomemndations!'}</div>
            </div>
            <div className={classNames(styles.aHelpCenterContent, 'col-sm-2')}><a>{'Explore forgiveness program'}</a></div>
          </div>
          <div>
          </div>
        </div>
      </div>
    </div>
  );
};

Content.propTypes = {
  content: PropTypes.object,
};

export default Content;
