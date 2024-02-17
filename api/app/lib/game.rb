class Game
  attr_reader :board

  def start(cells)
    # TODO: validate cells: min [[0, 0], [0, 0]] and if only 0 or 1
    @board = Board.create(cells: cells)
    self
  end

  def load(id)
    @board = Board.find(id.to_i)
    self
  end

  def next_state
    new_state = iterate(@board.cells)
    @board.update(cells: new_state)
  end

  def state(n = 1)

  end

  def final_state(attemps = 10)

  end

  private

  def iterate
    new_grid = []
    grid.each_with_index do |row, y|
      new_row = []
      row.each_with_index do |cell, x|
        new_row << apply_rules(cell, x, y, grid)
      end
      new_grid << new_row
    end
    new_grid
  end

  def apply_rules(cell, x, y, grid)
    neighbours = 0
    neighbours += grid[y][x - 1] if x - 1 >= 0
    neighbours += grid[y - 1][x] if y - 1 >= 0
    neighbours += grid[y][x + 1] if x + 1 < grid[y].size
    neighbours += grid[y + 1][x] if y + 1 < grid.size

    puts "neighbours: #{neighbours}, x: #{x}, y: #{y}, cell: #{cell}"

    return 1 if cell == 0 && neighbours == 3
    return 0 if cell == 1 && (neighbours < 2 || neighbours > 3)
    cell
  end
end
