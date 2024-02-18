import { useState } from "react";
import axios from "axios";

const useBoardApi = () => {
  const [grid, setGrid] = useState([[], []]);
  const headers = { headers: { 'Content-Type': 'application/json' } };

  const fetchBoard = async (id: number) => {
    const response = await axios.get(`/api/board/${id}`, headers);
    setGrid(response.data);
  }

  const resetBoard = async (id: number) => {
    const response = await axios.get(`/api/board/${id}/reset`, headers);
    setGrid(response.data);
  }

  const nextState = async (id: number) => {
    const response = await axios.get(`/api/board/${id}/next_state`, headers);
    setGrid(response.data);
  }

  const getState = async (id: number, n: number) => {
    const response = await axios.get(`/api/board/${id}/state?n=${n}`, headers);
    setGrid(response.data);
  }

  const finalState = async (id: number, attempts: number) => {
    const response = await axios.get(`/api/board/${id}/final_state?attempts=${attempts}`, headers);
    setGrid(response.data);
  }

  return [
    grid,
    {
      fetchBoard,
      resetBoard,
      nextState,
      getState,
      finalState
    }
  ] as const;
};

export default useBoardApi;
