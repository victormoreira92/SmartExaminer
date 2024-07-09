class CreateQuestions < ActiveRecord::Migration[7.0]
  def change
    create_table :questions do |t|
      t.string :feedback
      t.integer :type
      t.integer :points
      t.string :correct_answer
      t.string :alternatives

      t.timestamps
    end
  end
end
