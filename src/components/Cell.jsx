import React from 'react';
import { TETROMINOS } from '../gameHelpers';
import { StyledCell } from './styles/StyledCell';

const Cell = ({ type }) => (
  <StyledCell type={type} color={TETROMINOS[type].color} />
);

export default Cell;
