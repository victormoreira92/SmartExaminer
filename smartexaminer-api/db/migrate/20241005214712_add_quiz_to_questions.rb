class AddQuizToQuestions < ActiveRecord::Migration[7.0]
  def change
    add_reference :questions, :quiz, null: true, foreign_key: true
  end
end
