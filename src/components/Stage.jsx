import Cell from './Cell';

const Stage = ({ stage }) => {
  return (
    <div>{stage.map((row) => row.map((cell) => <Cell type={cell[0]} />))}</div>
  );
};

export default Stage;
