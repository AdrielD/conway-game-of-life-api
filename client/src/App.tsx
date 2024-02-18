import { useState, useEffect } from "react";
import useBoardApi from './useBoardApi.ts';

const Row = ({ children }: { children: any; }) =>
  <div className="row">{children}</div>;


const Cell = ({ value }: { value: number; }) =>
  <div className={`cell${value === 1 ? ' alive': '' }`} />

interface SidebarInterface {
  id: number;
  createBoard: (grid: number[][]) => void;
  fetchBoard: (id: number) => void;
  resetBoard: (id: number) => void;
  nextState: (id: number) => void;
  getState: (id: number, n: number) => void;
  finalState: (id: number, attempts: number) => void;
}

const Sidebar = ({
  id,
  createBoard,
  fetchBoard,
  resetBoard,
  nextState,
  getState,
  finalState
}: SidebarInterface) => {
  const [n, setN] = useState<any>(1);
  const [attempts, setAttempts] = useState<any>(10);
  const [fetchId, setFetchId] = useState<any>(1);
  const [sequence, setSequence] = useState<any>(0);

  const buildGrid = () => {
    let seq = sequence;
    const size = Math.ceil(Math.sqrt(seq.length));
    while (seq.length < size * size) {
      seq += '0';
    }
    seq = seq.split('');
    const grid = [];
    while (grid.length < size) {
      grid.push(seq.splice(0, size));
    }
    return grid;
  }

  return (
    <div className="sidebar">
      <div className="field">
        Sequence: <input type="text" value={sequence} onChange={e => setSequence(e.target.value)} />
        <br />
        <input type="button" onClick={() => createBoard(buildGrid())} value="Create Board" />
      </div>
      <div className="field">
        ID: <input type="text" value={fetchId} onChange={e => setFetchId(e.target.value)} />
        <br />
        <input type="button" onClick={() => fetchBoard(fetchId)} value="Get Board" />
      </div>
      <div className="field">
        <input type="button" onClick={() => resetBoard(id)} value="Reset Board" />
      </div>
      <div className="field">
        <input type="button" onClick={() => nextState(id)} value="Next State" />
      </div>
      <div className="field">
        N: <input type="text" value={n} onChange={e => setN(e.target.value)} />
        <br />
        <input type="button" onClick={() => getState(id, n)} value="Get State" />
      </div>
      <div className="field">
        Attempts: <input type="text" value={attempts} onChange={e => setAttempts(e.target.value)} />
        <br />
        <input type="button" onClick={() => finalState(id, attempts)} value="Final State" />
      </div>
    </div>
  )
}

const App = () => {
  const [id, grid, api] = useBoardApi();

  useEffect(() => {
    api.fetchBoard(1);
  }, []);

  return (
    <div className="game">
      <Sidebar
        id={id}
        createBoard={api.createBoard}
        fetchBoard={api.fetchBoard}
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
