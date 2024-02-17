class Game
  attr_reader :board

  def start(cells)
    @board = Board.create(cells: param)
    self
  end

  def load(id)
    @board = Board.find(id.to_i)
    self
  end

  def next_state

  end

  def state(n = 1)

  end

  def final_state(attemps = 10)

  end
end
