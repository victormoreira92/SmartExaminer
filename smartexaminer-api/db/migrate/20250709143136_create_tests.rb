class CreateTests < ActiveRecord::Migration[7.0]
  def change
    create_table :tests do |t|
      t.string :title
      t.text :description
      t.integer :status_test

      t.timestamps
    end
  end
end
