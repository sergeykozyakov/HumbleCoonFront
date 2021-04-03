import React from 'react';

import {
  Paper,
  Typography,
  Theme,
  StyleRules,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

interface OwnProps {
  classes: Record<string, string>;
}

const styles = (theme: Theme): StyleRules<string, any> => ({
  root: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    margin: theme.spacing(4),
    padding: theme.spacing(2),
    color: '#ffffff',
  },
});

const Hello = (props: OwnProps): JSX.Element => {
  const { classes = {} } = props;

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Typography>Hello Humble Coon!</Typography>
      </Paper>
    </>
  );
};

export default withStyles(styles)(Hello);
