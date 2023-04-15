import { StyledStage } from './styles/StyledStage';
import Cell from './Cell';

const Stage = ({ stage }) => {
  return (
    <StyledStage width={stage[0].length} height={stage.length}>
      {stage.map((row) => row.map((cell) => <Cell type={cell[0]} />))}
    </StyledStage>
  );
};

export default Stage;
