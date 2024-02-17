class CreateBoards < ActiveRecord::Migration[7.1]
  def change
    create_table :boards do |t|
      t.integer :cells, array: true, default: [[0, 0], [0, 0]]

      t.timestamps
    end
  end
end
