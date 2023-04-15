import { TETROMINOS } from '../gameHelpers';
import { StyledCell } from './styles/StyledCell';

const Cell = () => {
  return (
    <StyledCell type={'L'} color={TETROMINOS['L'].color}>
      Cell
    </StyledCell>
  );
};

export default Cell;
