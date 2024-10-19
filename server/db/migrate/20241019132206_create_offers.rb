class CreateOffers < ActiveRecord::Migration[7.1]
  def change
    create_table :offers do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.references :category, null: false, foreign_key: true
      t.string :image

      t.timestamps
    end
  end
end
