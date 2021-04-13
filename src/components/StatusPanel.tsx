import React from 'react';

import {
  Typography,
  Theme,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

import WarningIcon from '@material-ui/icons/Warning';
import CheckIcon from '@material-ui/icons/Check';

interface IProps {
  message: string;
  isError?: boolean;
}

const useStyles = makeStyles((theme: Theme) => ({
  text: {
    paddingTop: theme.spacing(1),
    paddingLeft: theme.spacing(1),
  },
}));

const StatusPanel: React.FC<IProps> = props => {
  const { message, isError = false } = props;

  const classes: Record<string, string> = useStyles(props);

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

export default StatusPanel;
