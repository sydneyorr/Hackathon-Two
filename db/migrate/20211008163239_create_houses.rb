class CreateHouses < ActiveRecord::Migration[6.1]
  def change
    create_table :houses do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.string :image
      t.string :city
      t.string :state
      t.string :street
      t.string :zip

      t.timestamps
    end
  end
end
