class CreateTests < ActiveRecord::Migration[7.0]
  def change
    create_table :tests do |t|
      t.string :title
      t.integer :number_questions
      t.integer :type

      t.timestamps
    end
  end
end
