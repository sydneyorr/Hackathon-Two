class AddHouseToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :house, :boolean
  end
end
