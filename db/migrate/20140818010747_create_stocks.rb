class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :name
      t.string :market
      t.decimal :price
      t.decimal :currency_change
      t.decimal :percent_change
      t.decimal :year_high
      t.decimal :year_low
      t.timestamps
    end
  end
end
