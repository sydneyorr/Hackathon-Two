class AddCostumeToUser < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :costume, :boolean
  end
end
