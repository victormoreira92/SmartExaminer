class CreateQuizzes < ActiveRecord::Migration[7.0]
  def change
    create_table :quizzes do |t|
      t.string :question
      t.string :alternatives
      t.string :correct_answer
      t.string :student_answer

      t.timestamps
    end
  end
end
