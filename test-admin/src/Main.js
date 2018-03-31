import React from "react";
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import { withTheme } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
// This replaces the textColor value on the palette
// and then update the keys for each component that depends on it.
// More on Colors: http://www.material-ui.com/#/customization/colors
const muiTheme = getMuiTheme({
  appBar: {
    height: 50,
  },
});

// MuiThemeProvider takes the theme as a property and passed it down the hierarchy.
const Main = () => (
  <AppBar {color="#102990"} />
);

export default Main;
