import { StyledStartButton } from './styles/StyledStartButton';

const StartButton = ({ callBack }) => {
  return <StyledStartButton onClick={callBack}>StartButton</StyledStartButton>;
};

export default StartButton;
