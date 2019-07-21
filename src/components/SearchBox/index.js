import React, { Component } from 'react';
import { withStyles } from '@material-ui/styles';
import { TextField } from '@material-ui/core';
import PropTypes from 'prop-types';
import styles from './styles';

class SearchBox extends Component {
  render() {
    const { classes, handleChange } = this.props;
    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          autoComplete="off"
          className={classes.textField}
          onChange={handleChange}
          margin="normal"
          placeholder="Nhập từ khóa"
        />
      </form>
    );
  }
}

SearchBox.propTypes = {
  classes: PropTypes.object,
  handleChange: PropTypes.func,
};

export default withStyles(styles)(SearchBox);
