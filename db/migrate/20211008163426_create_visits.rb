class CreateVisits < ActiveRecord::Migration[6.1]
  def change
    create_table :visits do |t|
      t.belongs_to :house, null: false, foreign_key: true
      t.belongs_to :costume, null: false, foreign_key: true

      t.timestamps
    end
  end
end
