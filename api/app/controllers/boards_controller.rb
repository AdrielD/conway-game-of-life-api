class BoardsController < ApplicationController
  before_action :load_game, only: [:next_state, :state, :final_state]

  def create
    game = Game.new.start(board_params[:cells])
    render json: { id: game.board.id }, status: :created
  end

  def next_state
    @game.next_state
    render json: @game.board.cells, status: :ok
  end

  def state
    @game.state(board_params[:n])
    render json: @game.board.cells, status: :ok
  end

  def final_state
    @game.final_state(board_params[:attemps])
    render json: @game.board.cells, status: :ok
  end

  private

  def load_game
    @game = Game.new.load(board_params[:id])
  end

  def board_params
    params.permit(:id, :cells, :n, :attempt)
  end
end
