import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  color: {
    primary: '#D32F2F',
    secondary: '#00BCD4',
    error: '#E64A19',
    textColor: '#FFFFFF',
    defaultTextColor: '#000000',
    hover: 'rgba(0,0,0,0.08)',
  },
  typoraphy: {
    fontFamily: 'Roboto',
  },
  shape: {
    borderRadius: 4,
    backgroundColor: '#7B1FA2',
    textColor: '#FFFFFF',
    border: '#CCCCCC',
  },
});
export default theme;
