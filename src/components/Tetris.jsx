import { createStage } from '../gameHelpers';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';
import { StyledTetris, StyledTetrisWrapper } from './styles/StyledTetris';

const STAGE = createStage();

const Tetris = () => {
  return (
    <StyledTetrisWrapper>
      <StyledTetris>
        <Stage stage={STAGE} />
        <aside>
          <Display text="Score" />
          <Display text="Rows" />
          <Display text="Level1" />
        </aside>
        <StartButton />
      </StyledTetris>
    </StyledTetrisWrapper>
  );
};

export default Tetris;
