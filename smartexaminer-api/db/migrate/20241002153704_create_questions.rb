class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :content
      t.integer :score
      t.text :feedback_correct
      t.text :feedback_incorrect

      t.timestamps
    end
  end
end
