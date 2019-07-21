import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import LoadingIcon from './../../assets/images/loading.gif';
import styles from './styles';

class GlobalLoading extends Component {
  render() {
    const { classes, showLoading } = this.props;
    let xhtml = null;
    if (showLoading) {
      xhtml = (
        <div className={classes.globalLoading}>
          <img src={LoadingIcon} alt="loading" className={classes.icon} />
        </div>
      );
    }
    return xhtml;
  }
}

GlobalLoading.propTypes = {
  classes: PropTypes.object,
  showLoading: PropTypes.bool,
};

const mapStateToProps = state => {
  return {
    showLoading: state.ui.showLoading,
  };
};

const withConnect = connect(
  mapStateToProps,
  null,
);

export default compose(
  withStyles(styles),
  withConnect,
)(GlobalLoading);
