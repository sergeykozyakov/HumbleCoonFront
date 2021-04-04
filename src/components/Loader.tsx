import React from 'react';

import {
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';

interface IProps {
  isCircular: boolean;
}

export default (props: IProps): JSX.Element => (
  props.isCircular
    ? <CircularProgress color="secondary" />
    : <LinearProgress color="secondary" />
);
