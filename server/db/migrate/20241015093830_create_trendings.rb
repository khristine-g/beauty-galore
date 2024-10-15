class CreateTrendings < ActiveRecord::Migration[7.1]
  def change
    create_table :trendings do |t|
      t.string :name
      t.text :description
      t.decimal :price
      t.string :image
      t.references :category, null: false, foreign_key: true

      t.timestamps
    end
  end
end
