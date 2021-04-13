import React from 'react';

import {
  CircularProgress,
  LinearProgress,
} from '@material-ui/core';

interface IProps {
  isCircular: boolean;
}

const Loader: React.FC<IProps> = ({ isCircular }) => (
  isCircular
    ? <CircularProgress color="secondary" />
    : <LinearProgress color="secondary" />
);

export default Loader;
