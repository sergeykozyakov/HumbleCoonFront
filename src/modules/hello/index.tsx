import React, { useState } from 'react';

import {
  Paper,
  Grid,
  TextField,
  Button,
  Theme,
  StyleRules,
} from '@material-ui/core';

import { withStyles } from '@material-ui/core/styles';

import { apiPost } from '../../actions/actions';

import { HELLO_SERVICE_URL } from './constants';

import IHelloResponse from '../../interfaces/IHelloResponse';

import Loader from '../../components/Loader';
import StatusPanel from '../../components/StatusPanel';

interface IProps {
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

const Hello = (props: IProps): JSX.Element => {
  const { classes = {} } = props;

  const [name, setName] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<IHelloResponse | null>();
  const [error, setError] = useState<string | null>();

  const apiUrl = '/api/';

  const onChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target && event.target.value);
  };

  const onClickSubmit = () => {
    setIsLoading(true);
    setResponse(null);
    setError(null);

    apiPost<IHelloResponse>(
      HELLO_SERVICE_URL,
      { name },
      (data: IHelloResponse) => {
        setName('');
        setIsLoading(false);
        setResponse(data);
      },
      (errorText: string) => {
        setIsLoading(false);
        setError(errorText);
      },
    );
  };

  return (
    <>
      <Paper elevation={3} className={classes.root}>
        <Grid container spacing={3}>
          <Grid item>
            <TextField
              label="Enter your name"
              color="secondary"
              variant="outlined"
              size="small"
              disabled={isLoading}
              value={name}
              onChange={onChangeName}
            />
          </Grid>
          <Grid item>
            <Button
              variant="contained"
              color="secondary"
              disabled={isLoading}
              onClick={onClickSubmit}
            >
              Check It!
            </Button>
          </Grid>

          {isLoading && (
            <Grid item>
              <Loader isCircular />
            </Grid>
          )}

          <Grid item>
            {!!error && <StatusPanel isError message={error} />}
            {!!response && <StatusPanel message={response.name} />}
          </Grid>
        </Grid>
      </Paper>
    </>
  );
};

export default withStyles(styles)(Hello);
