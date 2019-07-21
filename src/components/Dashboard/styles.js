const styles = theme => ({
  wrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: '100vh',
  },
  wrapperContent: {
    width: '100%',
    padding: 10,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  shiftLeft: {
    marginLeft: -240,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
});

export default styles;
