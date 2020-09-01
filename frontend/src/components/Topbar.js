import React from 'react';
// Components
import Appbar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export default function CustomTopbar() {
  return (
    <React.Fragment>
      <Appbar position="sticky">
        <Toolbar>
    <Button color="inherit" href="/play/">Play</Button>
    <Button color="inherit"href="/Leaderboard/">Leaderboard</Button>
    <Button color="inherit" href="/About/">About</Button>
        </Toolbar>
      </Appbar>
    </React.Fragment>
  );
}
