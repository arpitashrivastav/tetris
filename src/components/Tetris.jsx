import { createStage } from '../gameHelpers';
import Display from './Display';
import Stage from './Stage';
import StartButton from './StartButton';

const STAGE = createStage();

const Tetris = () => {
  return (
    <div>
      <Stage stage={STAGE} />
      <aside>
        <Display text="Score" />
        <Display text="Rows" />
        <Display text="Level1" />
      </aside>
      <StartButton />
    </div>
  );
};

export default Tetris;
