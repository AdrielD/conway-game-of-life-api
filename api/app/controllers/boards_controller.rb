class BoardsController < ApplicationController
  def create
    board = Board.create(params[:cells])
    # TODO
    # add validation: minimum of [[0, 0], [0, 0]] 
    render json { id: board.id }, status: :created
  end

  def next_state
    board = Board.find(params[:id])
    board.next_state
    render json { board: board.cells }, status: :ok
  end

  def state
    board = Board.find(params[:id])
    board.state(params[:n])
    render json { board: board.cells }, status: :ok
  end

  def final_state
    board = Board.find(params[:id])
    board.final_state(params[:attemps])
    render json { board: board.cells }, status: :ok
  end
end
