import { useState, useEffect } from "react";
import useBoardApi from './useBoardApi.ts';
// import axios from "axios";

const Row = ({ children }: { children: any; }) =>
  <div className="row">{children}</div>;


const Cell = ({ value }: { value: number; }) =>
  <div className={`cell${value === 1 ? ' alive': '' }`} />

interface SidebarInterface {
  id: number;
  resetBoard: (id: number) => void;
  nextState: (id: number) => void;
  getState: (id: number, n: number) => void;
  finalState: (id: number, attempts: number) => void;
}

const Sidebar = ({
  id,
  resetBoard,
  nextState,
  getState,
  finalState
}: SidebarInterface) => {
  const [n, setN] = useState<any>(1);
  const [attempts, setAttempts] = useState<any>(10);

  return (
    <div className="sidebar">
      <p>Game ID: {id}</p>
      <input type="button" onClick={() => resetBoard(id)} value="Reset Board" />
      <br />
      <input type="button" onClick={() => nextState(id)} value="Next State" />
      <br />
      <input type="text" value={n} onChange={e => setN(e.target.value)} />
      <input type="button" onClick={() => getState(id, n)} value="Get State" />
      <br />
      <input type="text" value={attempts} onChange={e => setAttempts(e.target.value)} />
      <input type="button" onClick={() => finalState(id, attempts)} value="Final State" />
    </div>
  )
}

const App = () => {
  const [grid, api] = useBoardApi();
  const id = 1;

  useEffect(() => {
    api.fetchBoard(1);
  }, []);

  return (
    <div className="game">
      <Sidebar
        id={id}
        resetBoard={api.resetBoard}
        nextState={api.nextState}
        getState={api.getState}
        finalState={api.finalState}
      />
      <div className="grid">
        {
          grid.map((row, rIndex) => 
            <Row key={rIndex}>
              { row.map((cell,cIndex) => 
                <Cell key={cIndex} value={cell} />
              )}
            </Row>
          )
        }
      </div>
    </div>
  )
};

export default App;
