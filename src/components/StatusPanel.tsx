import React from 'react';

import {
  Typography,
  StyleRules,
  Theme,
  Grid,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

interface IProps {
  message: string;
  isError?: boolean;
  classes: Record<string, string>;
}

const styles = (theme: Theme): StyleRules<string, any> => ({
  text: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
});

const StatusPanel = (props: IProps): JSX.Element => {
  const { message, isError = false, classes = {} } = props;

  return (
    <Grid container>
      <Grid item>
        {isError
          ? <WarningIcon color="secondary" fontSize="large" />
          : <CheckIcon fontSize="large" />}
      </Grid>
      <Grid item>
        <Typography
          color={isError ? 'secondary' : undefined}
          className={classes.text}
        >
          {message}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(StatusPanel);
